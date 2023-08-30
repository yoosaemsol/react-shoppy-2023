import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-brand py-2 px-6 rounded-full hover:bg-brand-yellow"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
