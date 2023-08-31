import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <Button>Add to cart</Button>
        </form>
      </div>
    </section>
  );
}
