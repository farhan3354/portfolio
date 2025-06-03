import React from 'react';

const HomePage = () => {
  return (
    <>
     <div id="home" className="">
      <div className="slider-wrapper">
        <div
          className="slide personal-portfolio-slider slider-parallax slider-style-3 flex items-center justify-center bg-image bg-cover bg-center h-96"
          style={{ backgroundImage: 'url(https://trydo.rainbowit.net/assets/images/bg/bg-image-25.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-left">
                  <span className="text-white text-lg font-medium">Freelance digital designer</span>
                  <h1 className="title text-4xl md:text-6xl font-bold text-white mt-4">
                    Hello, I'm <span className="text-blue-400">Farhan Bashir</span> Welcome to my World.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default HomePage;
