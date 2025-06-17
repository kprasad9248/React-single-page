import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Message sent! Thank you, ${name}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Contact ElectroShop</h2>
        <p className="text-muted text-center mb-4">
          We're here to help! Reach out to us for any queries, support or feedback.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📍 Visit Us</h5>
              <p className="text-muted mb-2">ElectroShop Headquarters</p>
              <p className="mb-0">24-9-15, Tamma vari  Street,<br />Mandapeta, A.P, India</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📧 Email Us</h5>
              <p className="text-muted mb-2">Customer Support</p>
              <p className="mb-0">support@electroshop.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📞 Call Us</h5>
              <p className="text-muted mb-2">Mon–Sat: 9am to 6pm</p>
              <p className="mb-0">+91-95025 39248</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <form className="contact-form p-4 shadow rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="4"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;




















/*
// Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Message sent! Thank you, ${name}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Contact ElectroShop</h2>
        <p className="text-muted text-center mb-4">
          We're here to help! Reach out to us for any queries, support or feedback.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📍 Visit Us</h5>
              <p className="text-muted mb-2">ElectroShop Headquarters</p>
              <p className="mb-0">2nd Floor, Main Street,<br />Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📧 Email Us</h5>
              <p className="text-muted mb-2">Customer Support</p>
              <p className="mb-0">support@electroshop.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white p-4 shadow rounded h-100">
              <h5 className="fw-bold mb-3">📞 Call Us</h5>
              <p className="text-muted mb-2">Mon–Sat: 9am to 6pm</p>
              <p className="mb-0">+91-95025 39248</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <form className="contact-form p-4 shadow rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="4"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


















/*
// Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Message sent! Thank you, ${name}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
        <p className="text-muted text-center mb-5">Have questions? We’re happy to help!</p>

        <div className="row justify-content-center">
          {/* Contact Form 
          <div className="col-md-8">
            <form className="contact-form p-4 shadow rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="4"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

*/
