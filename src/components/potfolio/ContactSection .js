import React from "react";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 w-full order-2 lg:order-1">
                  <div className="mb-12 text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Hire Me.</h2>
                    <p className="text-gray-600">
                      I am available for freelance work. Connect with me via phone:{" "}
                      <a href="tel:+923141637204" className="text-indigo-600 hover:underline">03141637204 </a>{" "}
                      <br/>or email: 
                      <a href="mailto:farhanbashir3354@gmail.com" className="text-indigo-600 hover:underline"> farhanbashir3354@gmail.com</a>
                    </p>
                  </div>

                  <div className="form-wrapper">
                    <form className="space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="item01"
                          placeholder="Your Name *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="item02"
                          placeholder="Your email *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="subject"
                          id="item03"
                          placeholder="Write a Subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <textarea
                          id="item04"
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="lg:w-1/2 w-full order-1 lg:order-2 mb-8 lg:mb-0">
                  <div className="thumbnail rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://trydo.rainbowit.net/assets/images/about/about-6.jpg"
                      alt="Contact"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
      <Footer></Footer>
    </>
   
  );
};

export default ContactSection;