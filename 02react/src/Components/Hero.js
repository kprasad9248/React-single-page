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






































