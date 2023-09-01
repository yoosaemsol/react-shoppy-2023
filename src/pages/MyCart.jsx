import React from 'react';

import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { LuCircleEqual } from 'react-icons/lu';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="pb-10 flex flex-col">
      <h2 className="p-10 text-2xl font-semibold">My cart</h2>
      {!hasProducts && <p className="m-auto text-lg">Your cart is empty!</p>}
      {hasProducts && (
        <>
          <ul className="border-b-2 border-gray-200 pb-4">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center pt-10 px-10 sm:px-14 mb-10">
            <PriceCard text="Subtotal" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="Delivery" price={SHIPPING} />
            <LuCircleEqual className="shrink-0" />
            <PriceCard text="Total" price={totalPrice + SHIPPING} />
          </div>
          <div className="flex justify-center w-full px-12">
            <Button w={'full'}>Order</Button>
          </div>
        </>
      )}
    </section>
  );
}
