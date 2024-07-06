import React from 'react';

const ProductDetails = ({ product }) => {
  const { productName, company, category, price, rating, discount, availability } = product;

  return (
    <div className="product-details">
    
      <h1>{productName}</h1>
      <p>Company: {company}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default ProductDetails;
