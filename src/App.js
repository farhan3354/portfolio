import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Profiler } from "react"; // Make sure Profiler is imported from 'react'

import { AuthProvider, useAuth } from "./context/AuthContext";
import Servicelists from "./components/Header/Servicelists";
import ServiceList from "./components/pages/ServiceList";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import PrivateRoute from "./PrivateRoute";
// import Header from "./components/Header/Header";
import ServiceDetail from "./components/ServiceDetail";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/Cancel";
import About from "./components/potfolio/About"; // This is the 'About' you want to profile
import AboutEcom from "./components/pages/About"; // Assuming this is a different About component
import Contact from "./components/pages/Contact";

const App = () => {
  const [timer, settimer] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const datatime = new Date();
      const hours = String(datatime.getHours()).padStart(2, '0');
      const min = String(datatime.getMinutes()).padStart(2, '0');
      const sec = String(datatime.getSeconds()).padStart(2, '0');

      const curr = `${hours}:${min}:${sec}`;

      settimer(curr);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Your onRenderCallback function for Profiler
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization optimizations
    startTime, // timestamp of when React began rendering this update
    commitTime, // timestamp of when React committed this update
    interactions // Set of interactions belonging to this update
  ) {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    });
  }

  return (
    <AuthProvider>
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{timer}</p>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/product" element={<Servicelists />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* Note: You have two 'About' components. Make sure you're using the correct one here.
                      I'm assuming 'AboutEcom' is for the '/about' route, and 'About' (from portfolio)
                      is for the '/' (home) route based on your previous code. */}
          <Route path="/about" element={<AboutEcom />} />
          <Route path="/contact" element={<Contact />} />

          {/* This is how you apply Profiler to the 'About' component for the home route */}
          <Route
            path="/"
            element={
              <Profiler id="HomePageAbout" onRender={onRenderCallback}>
                <About /> {/* <-- Profiler wraps the component for this specific route */}
              </Profiler>
            }
          />

          <Route
            path="/dashboard/user"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;