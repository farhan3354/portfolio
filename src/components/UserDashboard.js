import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const UserDashboard = () => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/users/me",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUserDetails(response.data);
        } catch (err) {
          setError(
            err.response?.data?.message || "Failed to fetch user details"
          );
        }
      }
    };

    fetchUserDetails();
  }, [user]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-8 transition hover:shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <FaUserCircle className="text-6xl text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Welcome, {userDetails.username}
          </h2>

          <div className="space-y-3 text-gray-700 text-md">
            <p>
              <span className="font-semibold">Email:</span> {userDetails.email}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {userDetails.role}
            </p>
          </div>
        </div>

        {/* Placeholder for user orders */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            My Orders
          </h3>
          <p className="text-gray-600">
            You have no orders yet. Start shopping now!
          </p>
          {/* You can map over user orders here once you implement that feature */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
