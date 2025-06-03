import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  // Fetch cart items for admin
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart/admin", {
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

  // Fetch cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>No cart items found.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border p-2">User</th>
              <th className="border p-2">Service</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td className="border p-2">
                  {item.userId?.username || "Unknown User"}
                </td>
                <td className="border p-2">
                  {item.serviceId?.title || "Unknown Service"}
                </td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">
                  ${item.serviceId?.price.toFixed(2) || "N/A"}
                </td>
                <td className="border p-2">
                  ${(item.serviceId?.price * item.quantity).toFixed(2) || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminCartPage;
