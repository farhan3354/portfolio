import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContactSection from "./ContactSection ";

const ServicesSection = () => {
  const services = [
    {
      title: "WordPress Website Development",
      description:
        "I specialize in creating responsive and user-friendly WordPress websites tailored to meet client needs. From business sites to blogs and e-commerce platforms, I ensure clean design, optimized performance, and easy content management using powerful WordPress themes and plugins.",

      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
        </svg>
      ),
    },
    {
      title: "Frontend Development",
      description:
        "As a Frontend Developer, I craft interactive, responsive, and visually engaging web interfaces using modern technologies like React.js, HTML, CSS, JavaScript, and Tailwind CSS. I focus on delivering seamless user experiences, clean code, and performance-optimized applications.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      title: "Laravel Development",
      description:
        "I build robust, scalable, and secure web applications using Laravel — a powerful PHP framework. From RESTful APIs to full-stack solutions, I focus on writing clean, maintainable code while leveraging Laravel’s features like Eloquent ORM, Blade templating, and middleware for efficient backend development.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "I develop responsive and high-performing mobile applications for Android and iOS using modern technologies like React Native and Flutter. My focus is on building intuitive, fast, and scalable mobile apps that deliver a seamless experience across devices.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Mern Stack Development",
      description:
        "I specialize in building full-stack web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. From designing responsive frontends to developing powerful backend APIs, I create dynamic, scalable, and high-performance web solutions tailored to client needs.",

      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "I craft intuitive and engaging user interfaces with a focus on seamless user experiences. Using tools like Figma and Adobe XD, I design wireframes, prototypes, and final layouts that align with user needs and business goals, ensuring both visual appeal and functionality.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
  ];

  const images = [
    "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
    "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
    "https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8QDYpmxRMJtnX4tU54pYCX3CraFxJ3GL6Q&s",
  ];

  const responsive = {
    //These settings should be outside the component
    superLargeDesktop: {
      // the naming can be any, change it.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section id="service" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My Awesome Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sleek frontend development and powerful MERN stack solutions
              to intuitive UI/UX design, WordPress sites, Laravel apps, and
              mobile development—I craft full-featured digital experiences
              tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-7">
            {services.map((service, index) => (
              <a
                key={index}
                href="/service"
                className="group block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500"
              >
                <div className="service flex flex-col">
                  <div className="icon text-indigo-600 text-4xl mb-6 group-hover:text-white transition-colors">
                    {" "}
                    {service.icon}
                  </div>
                  <div className="content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-white transition-colors">
                      {" "}
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white">
                      {" "}
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div id="portfolio" className="portfolio-area py-20 bg-gray-200">
        {" "}
        <div className="portfolio-sacousel-inner mb-14">
          {" "}
          <div className="portfolio-wrapper">
            <div className="container mx-auto">
              <div className="row justify-center">
                {" "}
                <div className="col-lg-6">
                  <div className="section-title text-center mb-12">
                    {" "}
                    <h2 className="text-3xl font-bold text-gray-800">
                      Our Works
                    </h2>{" "}
                    <p className="text-gray-600">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-slick-activation mt-16 md:mt-20">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                showDots={false}
                containerClass="relative"
                dotListClass="flex justify-center mt-8"
                itemClass="px-2"
              >
                {images.map((img, index) => (
                  <div key={index} className="p-4">
                    <div className="portfolio relative rounded-lg overflow-hidden shadow-md group h-[400px] w-full">
                      {" "}
                      <div className="thumbnail-inner h-full">
                        <img
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className="bg-blur-image absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      </div>
                      <div className="content absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="inner">
                          <p className="text-gray-500">Development</p>
                          <h4 className="text-xl font-semibold text-gray-800">
                            Getting tickets to the big show
                          </h4>
                          <div className="portfolio-button mt-4">
                            <a
                              href="/portfolio-details"
                              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                              Case Study
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        className="link-overlay absolute inset-0"
                        href="/portfolio-details"
                      ></a>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </>
  );
};

export default ServicesSection;
