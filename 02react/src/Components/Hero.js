import React from 'react';

function Hero() {
  return (
    <section
      className="hero-section py-5 text-white "
      id="hero"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-vector/ev-charge-station-electric-car-260nw-2399501241.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container text-center  bg-opacity-75 rounded py-5 mt-5">
        <h1 className="display-4 fw-bold mb-3 mt-5">Welcome to ElectroShop</h1>
        <p className="lead mb-4 mt-5">Your one-stop shop for the latest gadgets and electronics</p>
        <a href="#products" className="btn btn-primary btn-lg mt-5">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;



















/*
// Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="hero-section py-5 text-white bg-dark" id="hero">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">Welcome to ElectroShop</h1>
        <p className="lead mb-4">Your one-stop shop for the latest gadgets and electronics</p>
        <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;

*/




















/*
import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content 
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Upgrade Your World <br /> With <span className="text-primary">ElectroShop</span>
            </h1>
            <p className="lead mb-4">
              Latest gadgets. Best prices. Fast delivery. Experience shopping like never before.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#products" className="btn btn-primary btn-lg">
                Shop Now
              </a>
              <a href="#about" className="btn btn-outline-light btn-lg border border-white text-white">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image *
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1042/1042333.png"
              alt="Electronics"
              className="img-fluid hero-img"
              style={{ maxHeight: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

*/