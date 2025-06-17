import React, { useEffect, useState, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhCVSpiaU9L9pmWF8_TJwZaDwBD7tMNit22HLvozjPq6VcQcOujmL9X2P5fvTXCntijhIfESj7iWGiEzfBhYHLY-qZ--ynj9VQzV4mBbawzZ5dNuwo-qKR3A',
    price: '₹12,999',
    desc: 'Latest Android phone with powerful processor and 5G support.',
    rating: 4
  },
  {
    id: 2,
    name: 'Laptop',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_wxNh4Rtx2-nq3RWCmHOgiHASOD6iQ9ojqiVI2hK1vIW30Zgw7GzsKyCBCx63L7gwS8dkQT0pj2HWb414v-ceGWJyvP-P7OIVoT5CdV9vWo54ct0NgZf1',
    price: '₹45,000',
    desc: 'Sleek, fast, and ideal for both work and gaming.',
    rating: 5
  },
  {
    id: 3,
    name: 'Smartwatch',
    image: 'https://m.media-amazon.com/images/I/71pv2olJ+eL.jpg',
    price: '₹4,499',
    desc: 'Track your fitness and stay connected on the go.',
    rating: 3
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdQwilQ0xWSnNjR4hvmaQG1uGaRJyct6TJngsex3PILCnWWUCp8EnZpniZt5gRZJg9pAY29WKnctIuaVK2F3ItEF0q7a9kBLkrZWzTem7MyftaArE7rUf8og',
    price: '₹1,299',
    desc: 'Crystal-clear sound and deep bass with noise cancellation.',
    rating: 4
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    image: 'https://m.media-amazon.com/images/I/818xEpjRf9L._SX679_.jpg',
    price: '₹2,299',
    desc: 'Portable speaker with deep bass and 12-hour battery life.',
    rating: 4
  },
  {
    id: 6,
    name: 'Tablet',
    image: 'https://m.media-amazon.com/images/I/615nN24VhkL._SL1080_.jpg',
    price: '₹15,999',
    desc: '10-inch tablet perfect for reading, browsing, and streaming.',
    rating: 3
  },
  {
    id: 7,
    name: 'Gaming Mouse',
    image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF894,1000_QL80_.jpg',
    price: '₹1,499',
    desc: 'RGB gaming mouse with 6 buttons and DPI switch.',
    rating: 5
  },
  {
    id: 8,
    name: 'Power Bank',
    image: 'https://m.media-amazon.com/images/I/61zsaas+4PL._SL1500_.jpg',
    price: '₹999',
    desc: '10000mAh fast-charging power bank with dual USB ports.',
    rating: 4
  },
  {
    id: 9,
    name: 'Smart TV',
    image: 'https://m.economictimes.com/thumb/msid-116410462,width-1200,height-900,resizemode-4,imgsize-41930/tv-under-25000.jpg',
    price: '₹24,999',
    desc: '43-inch 4K Ultra HD Smart TV with voice control and streaming apps.',
    rating: 5
  },
  {
    id: 10,
    name: 'Wireless Keyboard & Mouse',
    image: 'https://m.media-amazon.com/images/I/71AP3gOZ+tL._AC_UF1000,1000_QL80_.jpg',
    price: '₹1,899',
    desc: 'Slim wireless keyboard and mouse combo with long battery life.',
    rating: 4
  }
];

function OurProducts() {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? '#ffc107' : '#e4e5e9' }}>★</span>
    ));
  };

  return (
    <section id="products" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Products</h2>
        <p className="text-muted mb-4">Explore electronics from all categories</p>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-secondary btn-sm" onClick={scrollLeft}>←</button>
          <button className="btn btn-outline-secondary btn-sm" onClick={scrollRight}>→</button>
        </div>

        <div
          className="d-flex overflow-auto gap-3 px-2"
          ref={scrollRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {loaded && products.map(product => (
            <div
              className="card product-card shadow-sm border-0 position-relative"
              key={product.id}
              style={{ minWidth: '250px' }}
              id={`product-${product.id}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top p-4 product-img"
                style={{ height: '180px', objectFit: 'contain' }}
              />
              <div className="card-body text-start">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted small">{product.desc}</p>
                <div className="mb-2">{renderStars(product.rating)}</div>
                <p className="fw-bold text-primary">{product.price}</p>
                <button className="btn btn-outline-primary btn-sm w-100">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;




















