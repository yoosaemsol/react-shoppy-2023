import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();

  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess(`${title} has been added to your cart 🛍️`);
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  const handleSelect = (e) => setSelected(e.target.value);

  return (
    <section className="flex flex-col lg:flex-row gap-10 p-5">
      <img
        className="w-full sm:w-2/3 sm:m-auto lg:w-1/2"
        src={image}
        alt={title}
      />
      <div className="pt-20 w-full pr-10">
        <p className="bg-brand-green text-white py px-2 w-fit rounded-sm mb-5 opacity-80">
          {category}
        </p>
        <h3 className="text-xl">{title}</h3>
        <p className="pb-3">{price.toLocaleString()}</p>
        <hr className="w-full" />
        <div
          className="text-lg pt-10"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, '<br>'),
          }}
        />
        <form onSubmit={handleSubmit} className="flex flex-col w-full py-20">
          <div className="pb-10">
            <label className="mr-2" htmlFor="size">
              Size
            </label>
            <select
              className="text-brand-active outline-none cursor-pointer"
              onChange={handleSelect}
              value={selected}
              id="size"
            >
              {options?.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          {success && <p className="my-2">{success}</p>}
          <Button>Add to cart</Button>
        </form>
      </div>
    </section>
  );
}
