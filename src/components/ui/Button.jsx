import React from 'react';

export default function Button({ children, onClick, w }) {
  return (
    <button
      className={`bg-brand py-2 px-6 rounded-full hover:bg-brand-yellow ${
        w && `w-${w}`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
