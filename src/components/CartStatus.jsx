import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();

  const { data: products } = useQuery(['carts'], () => getCart(uid));

  return (
    <div className="relative">
      Carts
      {products?.length && (
        <p className="w-6 h-6 text-center bg-brand-active text-white font-bold rounded-full absolute -top-3 -right-3 -z-10">
          {products?.length}
        </p>
      )}
    </div>
  );
}
