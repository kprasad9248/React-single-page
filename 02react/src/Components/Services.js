import React from 'react';

const services = [
  {
    title: "Fast Shipping 🚚",
    desc: "2-3 day delivery with real-time tracking & contactless drop."
  },
  {
    title: "Secure Payments 🔐",
    desc: "SSL secured, UPI, Cards, Wallets – all supported!"
  },
  {
    title: "24/7 Support 📞",
    desc: "Need help? Chat, call or email us anytime."
  },
  {
    title: "Easy Returns 🔁",
    desc: "Free pickup & returns within 7 days. Hassle-free!"
  },
  {
    title: "Loyalty Rewards 🪙",
    desc: "Earn coins on every purchase. Redeem for discounts!"
  },
  {
    title: "Warranty & Repair ⚙️",
    desc: "Genuine warranty + doorstep repair available in select cities."
  },
];

function Services() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <p className="text-muted mb-5">Delivering value beyond electronics.</p>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm service-card border-0 p-4">
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;




















