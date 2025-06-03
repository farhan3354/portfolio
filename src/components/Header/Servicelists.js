import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services");
        setServices(response.data);
        setFilteredServices(response.data);
      } catch (err) {
        setError("Error fetching services");
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  const handleSearch = () => {
    const results = services.filter(
      (service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(results);
  };

  const handleAddToCart = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <>
      <ImageSlider></ImageSlider>

      <div className="bg-gray-50 px-4 sm:px-8 py-12 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Available Services
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-2 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden"
              >
                {service.image && (
                  <img
                    src={`http://localhost:5000/${service.image}`}
                    alt={service.title}
                    className="w-full h-60 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {service.description}
                  </p>
                  <p className="text-green-600 font-bold text-md mb-4">
                    ${service.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(service._id)}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
                  >
                    View Details & Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No services found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
