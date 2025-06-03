import React, { useState } from "react";
import HomePage from "./Banner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/farhanbashir.3354",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/farhan-web-developer//",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/farhanbashir_3354/",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* <header class="w-full">
        <nav class="border-gray-200 bg-gray-900 py-2.5">
          <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
            <a href="#" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
                Issue Tracker
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <a
                class="rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </a>
              <a
                class="rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                href="/guest"
              >
                Log out
              </a>
            </div>
            <div
              class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    class="block border-b py-2 pr-4 pl-3 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                    href="/add"
                  >
                    Add Issue
                  </a>
                </li>
                <li>
                  <a
                    class="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                    href="/add"
                  >
                    Saved Issue
                  </a>
                </li>
                <li>
                  <a
                    class="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                    href="/about"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}

      
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              {/* <div className="logo mr-10">
              <a href="/">
                <img 
                  src="" 
                  alt="Digital Agency" 
                  className="h-8"
                />
              </a>
            </div> */}

              <nav className="hidden lg:block">
                <ul className="flex space-x-8">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className={`text-gray-800 hover:text-indigo-600 transition-colors ${
                          activeLink === link.id
                            ? "font-medium text-indigo-600"
                            : ""
                        }`}
                        onClick={() => setActiveLink(link.id)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden lg:flex items-center space-x-4 mr-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="hidden lg:block">
                <a
                  href="tel:+923141637204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white border border-black hover:bg-indigo-700 text-blue-500 px-6 py-2 rounded-md transition-colors"
                >
                  Call Now
                </a>
              </div>

              <button
                className="lg:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white py-4 px-4 shadow-lg rounded-md mt-4">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`block py-2 text-gray-800 hover:text-indigo-600 ${
                        activeLink === link.id
                          ? "font-medium text-indigo-600"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveLink(link.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="tel:03141637204"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      <HomePage></HomePage>
    </>
  );
};

export default Header;
