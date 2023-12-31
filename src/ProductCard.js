import React from 'react';
import './ProductCard.css';
import Path from './product-image.jpg';
const ProductCard = (props) => {
  return (
    <div className="product-card">
      

      <img src={props.image} alt={props.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{props.title}</h2>
        <p className="product-price">${props.price}</p>
        <button href='https://www.google.com/' className="product-button">Learn More</button>
        <div><button className="product-button">How to Code</button></div>
      </div>
    </div>
    
  );
};

export default ProductCard;
