import React, { useState } from "react";

import ServicesSection from "./ServicesSection";
import Header from "./Header";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  

  return (
    <>
      <Header />
      <section id="about" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row md:flex-row items-center gap-12">
            <div className="lg:w-5/12 w-full">
              <div className="relative group">
                <img
                  src="https://farhan3354.github.io/resume/images/farhan.jpg"
                  alt="About Me"
                  className="w-full rounded-lg shadow-xl transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-red-600">Me</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Hi, I'm Farhan Bashir, a passionate MERN Stack Developer and a
                student at University of Central Punjab{" "}
                <a href="#" className="text-red-600 hover:underline">
                  (UCP) .
                </a>{" "}
                I specialize in building full-stack web applications using
                MongoDB, Express.js, React.js, and Node.js. I love solving
                real-world problems through clean, scalable code and
                continuously exploring new technologies to improve user
                experience and performance.
              </p>

              <div className="mt-8">
                <div className="flex flex-wrap border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "skills"
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    Main skills
                  </button>
                  <button
                    onClick={() => setActiveTab("awards")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "awards"
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    Awards
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "experience"
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "education"
                        ? "text-red-600 border-b-2 border-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    Education & Certification
                  </button>
                </div>

                <div className="py-6">
                  {activeTab === "skills" && (
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="/service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            User experience design{" "}
                            <span className="text-gray-500"> - UI/UX</span>
                          </a>
                          <p className="text-gray-600 mt-1">
                            Delight the user and make it work.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="/service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Web and user interface design{" "}
                            <span className="text-gray-500">
                              {" "}
                              - Development
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">
                            Websites, web experiences, ...
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray--600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="/service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Interaction design{" "}
                            <span className="text-gray-500"> - Animation</span>
                          </a>
                          <p className="text-gray-600 mt-1">
                            I like to move it move it.
                          </p>
                        </div>
                      </li>
                    </ul>
                  )}

                  {activeTab === "awards" && (
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Frontend Developer{" "}
                            <span className="text-gray-500">
                              - PNY Training
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="/service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Mern Stack Developer{" "}
                            <span className="text-gray-500">
                              - PNY Trainingr
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2025</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="/service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Laravel Developer{" "}
                            <span className="text-gray-500">
                              {" "}
                              - PNY Training
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2025</p>
                        </div>
                      </li>
                    </ul>
                  )}

                  {activeTab === "experience" && (
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Front-end Developer{" "}
                            <span className="text-gray-500">
                              - PNY Training
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2024 - Current</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Mern Stack Developer{" "}
                            <span className="text-gray-500">
                              - PNY Training
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2025 - current</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            Full Stack Developer{" "}
                            <span className="text-gray-500">
                              - PNY Training
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2025 - current</p>
                        </div>
                      </li>
                    </ul>
                  )}

                  {activeTab === "education" && (
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            BS Computer Science{" "}
                            <span className="text-gray-500">
                              - University of Central Punjab , Lahore, Pakistan
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            PNY Training Centre{" "}
                            <span className="text-gray-500">
                              - PNY Training Centre , Multan
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2024</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <a
                            href="service"
                            className="text-gray-600 hover:underline font-medium"
                          >
                            WordPress Developer{" "}
                            <span className="text-gray-500">
                              - Remote , U tube
                            </span>
                          </a>
                          <p className="text-gray-600 mt-1">2025</p>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-500">
      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
            <h2 className="mb-6 text-center font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Effortless Issue Tracking
            </h2>
            <p className="mb-8 text-center text-base text-indigo-200 md:text-lg">
              Manage and track issues seamlessly with our interactive and
              responsive platform. Add, edit, and filter issues with ease—all in
              one place.
            </p>
            <a
              className="mx-auto rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5"
              href="/add"
            >
              Add Issue
              <svg
                className="ml-2 inline h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                ></path>
              </svg>
            </a>
            <p className="mb-10 max-w-md text-xs tracking-wide text-indigo-100 sm:mx-auto sm:text-sm md:mb-8"></p>
          </div>
        </div>
      </div>  
      </div>
      
      <ServicesSection />{" "}
    </>
  );
};
export default About;
