import React from 'react';

export default function User({ user: { isAdmin, photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-md mr-4"
        src={photoURL}
        alt={displayName}
      />
      <span className={`hidden md:block ${isAdmin && 'text-brand-active'}`}>
        {isAdmin ? 'Admin' : `Hi 👋🏻 ${displayName}`}
      </span>
    </div>
  );
}
