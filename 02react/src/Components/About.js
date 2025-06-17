import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://i1.sndcdn.com/avatars-000138804576-bdtwci-t1080x1080.jpg"
              alt="About ElectroShop"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">About ElectroShop</h2>
            <p className="text-muted">
              ElectroShop is your one-stop destination for top-quality electronics at unbeatable prices.
              We bring the best tech deals directly to your doorstep with fast delivery, secure payments,
              and unmatched customer support.
            </p>
            <p className="text-muted">
              Whether you're a gamer, professional, or casual shopper, we have something for everyone —
              smartphones, laptops, wearables, and much more.
            </p>
            <ul className="list-unstyled">
              <li>✔ Fast and Secure Shipping</li>
              <li>✔ 24/7 Customer Assistance</li>
              <li>✔ Wide Range of Products</li>
              <li>✔ Easy Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;




















/*
import React from 'react';

function About() {
  return (
    <section id="about" className="bg-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">About ElectroShop</h2>
        <p className="text-muted mb-5">
          We are passionate about delivering the best electronics at unbeatable prices. With fast shipping, quality service, and a wide selection, we make your tech dreams a reality.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted">We ensure quick and safe delivery to your doorstep within 2-3 days nationwide.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h5 className="fw-bold">Best Deals</h5>
              <p className="text-muted">Save big with amazing deals on top brands and the latest technology.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-muted">Got questions? Our support team is here around the clock to help you out.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

*/