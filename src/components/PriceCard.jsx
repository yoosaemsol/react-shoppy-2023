import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-6 mx-2 rounded-2xl text-center text-sm sm:p-8 sm:text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-semi-bold text-brand-active text-xl md:text-2xl">
        {price.toLocaleString()}
      </p>
    </div>
  );
}
