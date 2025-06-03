import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto mb-5">
        {/* Heading Section */}
        <div className="flex justify-center">
          <div className="text-center py-4 my-4 w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Have Some Questions?
            </h1>
            <hr className="mt-4 border-t-2 border-blue-500 w-24 mx-auto" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
          {/* Contact Image */}
          <div className="md:w-5/12 flex justify-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              className="rounded-lg shadow-lg w-72 h-72 object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="md:w-6/12 bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Smith"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
