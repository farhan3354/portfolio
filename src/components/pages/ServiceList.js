import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [file, setFile] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/services");
      setServices(response.data);
    } catch (err) {
      setError("Error fetching services");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleUpdateClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
    setFile(null);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found, please log in again.");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to delete this service?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccessMessage("Service deleted successfully!");
      fetchServices();
    } catch (err) {
      console.error("Error deleting service:", err);
      setError("Error deleting service");
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedService(null);
    setFile(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedService({ ...selectedService, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found, please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("title", selectedService.title);
    formData.append("description", selectedService.description);
    formData.append("price", selectedService.price);
    if (file) formData.append("image", file);

    try {
      await axios.put(
        `http://localhost:5000/api/services/${selectedService._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Service updated successfully!");
      fetchServices();
      handleModalClose();
    } catch (err) {
      console.error("Error updating service:", err);
      setError("Error updating service");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Services
      </h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-lg font-bold text-green-600 mb-3">
              ${service.price.toFixed(2)}
            </p>
            {service.image && (
              <img
                src={`http://localhost:5000/${service.image}`}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}
            <div className="flex justify-between">
              <button
                onClick={() => handleUpdateClick(service)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Update */}
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={selectedService.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={selectedService.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={selectedService.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
