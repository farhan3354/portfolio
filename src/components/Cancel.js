import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

//  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Redirect to login if there is no token
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Adjust the path as necessary
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

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = item.serviceId ? item.serviceId.price : 0;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    // const stripe = await stripePromise;
    const items = cartItems.map((item) => ({
      serviceId: item.serviceId,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/checkout",
        { items },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Redirect to Stripe Checkout
      window.location.href = response.data.url;
    } catch (err) {
      setError("Checkout failed");
      console.error(err);
    }
  };

  // Render the component
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {error && <p className="text-red-500">{error}</p>}
      {cartItems.length === 0 ? (
        <p className="text-red-500">
          Your cart is empty. Please add some products.
        </p>
      ) : (
        <ul className="bg-white shadow-lg rounded-lg">
          {cartItems.map((item) => (
            <li key={item._id} className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">
                    {item.serviceId ? item.serviceId.title : "Unknown Service"}
                  </h2>
                  <p>
                    Description:{" "}
                    {item.serviceId ? item.serviceId.description : "N/A"}
                  </p>
                  <p>
                    Price: $
                    {item.serviceId ? item.serviceId.price.toFixed(2) : "N/A"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <h2 className="font-bold">Total Price: ${calculateTotalPrice()}</h2>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;