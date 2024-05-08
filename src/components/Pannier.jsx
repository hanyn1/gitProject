import React from 'react';
import { useCart } from './CartContext';
import 'bootstrap/dist/css/bootstrap.css';

export default function Pannier() {
  const { cart } = useCart();

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {cart.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Brand: {product.brand}</h5>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Price: {product.price}$</p>
                  <p className="card-text">
                    <span style={{ color: '#C7E9B0' }}>Discount: {product.discount}$</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
