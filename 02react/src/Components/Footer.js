import React, { useState } from 'react';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you, ${name}, for subscribing with ${email}!`);
    setName('');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Branding*/} 
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">ElectroShop</h4>
            <p>Smart gadgets, unbeatable prices – powering your digital world.</p>
            <div className="contact-info">
              <p>🏡 24-9-15, Tamma vari st, Mandapeta</p>
              <p>📞 +91-95025 39248</p>
              <p>📧 support@electroshop.com</p>
            </div>
          </div>

          {/* Quick Links*/} 
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Footer Form */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Stay Updated</h6>
            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center my-4">
          <p className="mb-2">Get connected with us on social networks:</p>
          <div>
            <a href="#!" className="me-3 text-reset" title="Facebook">
              <i className="fab fa-facebook-f"></i>
              
            </a>
            <a href="#!" className="me-3 text-reset" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="me-3 text-reset" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="me-3 text-reset" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="me-3 text-reset" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
             <a href="#!" className="me-3 text-reset" title="Whatup">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom*/} 
        <div className="text-center mt-4 border-top pt-3 position-relative">
          <p className="mb-1">&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
          <p className="small text-secondary">Designed with ❤️ by ElectroWeb Team</p>
          <button onClick={scrollToTop} className="scroll-top-btn">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



















/*
import React, { useState } from 'react';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thank you, ${name}, for subscribing with ${email}!`);
    setName('');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Branding 
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">ElectroShop</h4>
            <p>Smart gadgets, unbeatable prices – powering your digital world.</p>
            <div className="contact-info">
                <p>🏡 24-9-15, Tamma vari st, Mandapeta</p>
              <p>📞 +91-95025 39248</p>
              <p>📧 support@electroshop.com</p>
            </div>
          </div>

          {/* Quick Links 
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Footer Form 
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Stay Updated</h6>
            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom 
        <div className="text-center mt-4 border-top pt-3 position-relative">
          <p className="mb-1">&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
          <p className="small text-secondary">Designed with ❤️ by ElectroWeb Team</p>
          <button onClick={scrollToTop} className="scroll-top-btn">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


*/
