import React from 'react';

import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

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
