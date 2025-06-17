import React from "react";

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="https://www.electro-shop.ca/cdn/shop/files/Logo_Electro-Shop_transparent_beta_109x.png?v=1669267880"
            alt="Logo"
            width="30"
            height="30"
            className="me-2"
          />
          ElectroShop
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-light btn-sm" type="submit">Search</button>
          </form>

          <a href="#cart" className="btn btn-primary">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
