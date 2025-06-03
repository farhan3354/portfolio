import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Cart", path: "/cart" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-white hover:text-blue-400 transition">
          SwiftCart
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-lg font-semibold transition-colors duration-300 ${
                location.pathname === path ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-4 transition-all duration-300">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-medium transition-colors ${
                location.pathname === path ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              {name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </header>

    </>
    
  );
};

export default Header;
