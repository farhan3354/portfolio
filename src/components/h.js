import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [chartData, setChartData] = useState({});

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
      updateChartData(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  const updateChartData = (users) => {
    const roleCounts = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    setChartData({
      labels: Object.keys(roleCounts),
      datasets: [
        {
          label: "Users by Role",
          data: Object.values(roleCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Admin Dashboard</h1>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Management</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {users.length === 0 ? (
            <p className="text-gray-600 text-center">No users found.</p>
          ) : (
            <>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border rounded-lg shadow-sm">
                  <thead className="bg-blue-50 text-gray-700 font-semibold">
                    <tr>
                      <th className="py-3 px-6 border-b">Username</th>
                      <th className="py-3 px-6 border-b">Email</th>
                      <th className="py-3 px-6 border-b">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="py-3 px-6 border-b">{user.username}</td>
                        <td className="py-3 px-6 border-b">{user.email}</td>
                        <td className="py-3 px-6 border-b capitalize">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  User Roles Distribution
                </h3>
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      title: {
                        display: true,
                        text: "User Role Distribution",
                        font: {
                          size: 18,
                        },
                      },
                    },
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
