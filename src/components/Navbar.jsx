import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className="flex justify-between p-2 py-8">
      <Link to="/" className="text-3xl font-bold hover:text-brand-active">
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-8 font-semibold">
        <Link to="/products" className="font-normal hover:text-brand-active">
          Products
        </Link>
        <Link to="/carts" className="font-normal hover:text-brand-active">
          Carts
        </Link>
        <Link to="/products/new" className="text-lg hover:text-brand-active">
          <BsFillPencilFill />
        </Link>
        <button className="bg-brand py-2 px-6 rounded-full hover:bg-brand-yellow">
          Login
        </button>
      </nav>
    </header>
  );
}
