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




















