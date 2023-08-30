import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-md mr-4"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">Hi 👋🏻 {displayName}</span>
    </div>
  );
}
