import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between p-2 py-8">
      <Link to="/" className="text-3xl font-bold hover:text-brand-active">
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 sm:gap-8 font-semibold">
        <Link to="/products" className="font-normal hover:text-brand-active">
          Products
        </Link>
        {user && (
          <Link to="/carts" className="font-normal hover:text-brand-active">
            Carts
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-lg hover:text-brand-active">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login}>Login</Button>}
        {user && <Button onClick={logout}>Logout</Button>}
      </nav>
    </header>
  );
}
