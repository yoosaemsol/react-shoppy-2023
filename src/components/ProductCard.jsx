import React from 'react';

export default function ProductCard({ product }) {
  const { id, title, image, price } = product;
  return (
    <li>
      <img className="w-80" src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{price.toLocaleString()}</p>
      </div>
    </li>
  );
}
