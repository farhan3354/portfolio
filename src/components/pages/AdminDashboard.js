import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import AddService from "./AddService";
import ServiceList from "./ServiceList";
import AdminCartPage from "./AdminCart";
import Admin from "./../h"; 

const AdminDashboard = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("addService");
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios.get("http://localhost:5000/api/users/login", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user && user.token) {
      if (user.role === "admin") {
        fetchUsers();
      } else {
        setError("Access denied. Admins only.");
        setLoading(false);
      }
    } else {
      setError("You need to be logged in.");
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen p-4 fixed">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul>
          <li
            className={`cursor-pointer mb-2 p-2 rounded ${
              activeComponent === "addService"
                ? "bg-gray-700"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveComponent("addService")}
          >
            Add Service
          </li>
          <li
            className={`cursor-pointer mb-2 p-2 rounded ${
              activeComponent === "manageServices"
                ? "bg-gray-700"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveComponent("manageServices")}
          >
            Update Services
          </li>
          <li
            className={`cursor-pointer mb-2 p-2 rounded ${
              activeComponent === "adminCart"
                ? "bg-gray-700"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveComponent("adminCart")}
          >
            View Cart Items
          </li>
          <li
            className={`cursor-pointer mb-2 p-2 rounded ${
              activeComponent === "admin"
                ? "bg-gray-700"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveComponent("admin")}
          >
            View Cart (Page)
          </li>
        </ul>
      </aside>
      <main className="flex-grow ml-64 p-6">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        {loading && <p className="text-lg">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6">
          {activeComponent === "addService" && <AddService />}
          {activeComponent === "manageServices" && <ServiceList />}
          {activeComponent === "adminCart" && <AdminCartPage />}
          {activeComponent === "admin" && <Admin />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;