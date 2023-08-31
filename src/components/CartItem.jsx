import React from 'react';
import {
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillDelete,
} from 'react-icons/ai';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS =
  'text-brand-green transition-all cursor-pointer hover:text-brand-active';

export default function CartItem({
  product,
  product: { image, title, id, option, price, quantity },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;

    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, product.id);

  return (
    <li className="flex justify-between my-2 items-center px-10">
      <img className="w-40 md:w-48" src={image} alt={title} />
      <div className="flex-1 flex justify-between items-center ml-4">
        <div className="flex flex-col lg:flex-1 lg:flex-row lg:basis-3/5">
          <p className="lg:basis-3/5 text-lg cursor-pointer hover:text-brand-active">
            {title}
          </p>
          <p className="lg:basis-1/5 text-lg text-brand-active">{option}</p>
          <p className="lg:basis-1/5">{price.toLocaleString()}</p>
        </div>
        <div className="text-xl flex items-center gap-2">
          <AiFillMinusSquare
            className={`${ICON_CLASS} hover:-rotate-6`}
            onClick={handleMinus}
          />
          <span>{quantity}</span>
          <AiFillPlusSquare
            className={`${ICON_CLASS} hover:rotate-6`}
            onClick={handlePlus}
          />
          <AiFillDelete
            className={`${ICON_CLASS} hover:scale-125`}
            onClick={handleDelete}
          />
        </div>
        <p className="hidden md:block px-10">
          {(price * quantity).toLocaleString()}
        </p>
      </div>
    </li>
  );
}
