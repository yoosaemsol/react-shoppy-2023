import React from 'react';

export default function ProductCard({ product }) {
  const { id, title, image, price } = product;
  return (
    <li className="cursor-pointer hover:scale-110">
      <img className="w-full" src={image} alt={title} />
      <div className="text-center">
        <h3 className="truncate">{title}</h3>
        <p>{price.toLocaleString()}</p>
      </div>
    </li>
  );
}
