import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
              Who We Are
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We’re passionate about providing top-notch services tailored to
              your needs. With years of experience and a dedicated team, we aim
              to bring value, innovation, and satisfaction to every customer.
              Whether it's design, development, or support—you’re in good hands.
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 shadow-md transition duration-300 ease-in-out"
            >
              Get in Touch
            </NavLink>
          </div>

          {/* Right Column - Image */}
          <div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/images/about.png"
              alt="About Us"
              className="rounded-2xl shadow-2xl object-cover w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
