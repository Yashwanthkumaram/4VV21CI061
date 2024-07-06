import React from 'react';

const Productcard = ({ product }) => {
  const { productName, company, category, price, rating, discount, availability } = product;
  
  return (
    <div className="product-card">
      <img src={`https://via.placeholder.com/150`} alt={productName} />
      <h3>{productName}</h3>
      <p>Company: {company}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default Productcard;
