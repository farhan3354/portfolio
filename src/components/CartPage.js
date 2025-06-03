import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchCartItems();
    }
  }, [token, navigate]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data);
    } catch (err) {
      setError("Error fetching cart items");
      console.error(err);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/cart/${itemId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId ? response.data.updatedCartItem : item
        )
      );
      setSuccessMessage("Item quantity updated successfully!");
    } catch (err) {
      alert("Error updating quantity");
      console.error(err);
    }
  };

  const handleDeleteItem = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
      setSuccessMessage("Item deleted successfully!");
    } catch (err) {
      alert("Error deleting item");
      console.error(err);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = item.serviceId ? item.serviceId.price : 0;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const PaymentPage = () => {
    navigate("/PaymentPage");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Your Cart</h1>

        {successMessage && (
          <p className="text-green-600 mb-4">{successMessage}</p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {cartItems.length === 0 ? (
          <p className="text-gray-600">
            Your cart is empty. Please add some products.
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-start py-6">
                {item.serviceId?.image && (
                  <img
                    src={`http://localhost:5000/${item.serviceId.image}`}
                    alt={item.serviceId.title}
                    className="w-28 h-28 object-cover rounded-lg mr-6 shadow-sm"
                  />
                )}
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.serviceId?.title || "Unknown Service"}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    {item.serviceId?.description || "No description"}
                  </p>
                  <p className="text-gray-700 font-medium mb-2">
                    Price: ${item.serviceId?.price.toFixed(2) || "N/A"}
                  </p>
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor={`quantity-${item._id}`}
                      className="text-sm font-medium"
                    >
                      Quantity:
                    </label>
                    <input
                      id={`quantity-${item._id}`}
                      type="number"
                      min="1"
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item._id, Number(e.target.value))
                      }
                      className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteItem(item._id)}
                  className="ml-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Total Price:{" "}
              <span className="text-blue-600">${calculateTotalPrice()}</span>
            </h2>
            <button
              onClick={PaymentPage}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
