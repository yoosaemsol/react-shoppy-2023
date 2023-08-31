import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, title, image, price } = product;

  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
      className="cursor-pointer transition-all hover:scale-110"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="text-center">
        <h3 className="truncate">{title}</h3>
        <p>{price.toLocaleString()}</p>
      </div>
    </li>
  );
}
