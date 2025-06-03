import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchServiceDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
      setService(response.data);
    } catch (err) {
      setError("Error fetching service details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetail();
  }, [serviceId]);

  const handleAddToCart = async () => {
    if (!token) {
      alert("You need to be logged in to add items to the cart.");
      navigate("/login");
      return;
    }

    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const cartItem = {
      serviceId: service._id,
      quantity,
    };

    try {
      await axios.post("http://localhost:5000/api/cart", cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Item added to cart successfully!");
    } catch (error) {
      alert("Error adding to cart");
      console.error(error);
    }
  };

  if (loading) {
    return <p className="text-center text-lg py-10 text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center py-6">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {service.image && (
            <img
              src={`http://localhost:5000/${service.image}`}
              alt={service.title}
              className="w-full h-[400px] object-cover md:rounded-l-xl"
            />
          )}
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

            <p className="text-xl font-semibold text-gray-800 mb-4">
              Price:{" "}
              <span className="text-green-600">${service.price?.toFixed(2)}</span>
            </p>

            <div className="flex items-center gap-3 mb-8">
              <label htmlFor="quantity" className="text-lg font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border border-gray-300 rounded-md px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
