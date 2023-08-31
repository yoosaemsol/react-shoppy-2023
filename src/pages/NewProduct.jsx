import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsUploading(true);

    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess('Product has been successfully added.');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="bg-brand-green m-6 rounded-3xl p-10 relative">
      <h2 className="text-2xl font-semibold mb-10">Register New Product</h2>
      {success && (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <p className="text-2xl z-10">✅ {success}</p>
          <div className="bg-white opacity-50 absolute w-full h-full"></div>
        </div>
      )}
      <div className="flex justify-between">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
            className="border-none bg-inherit text-sm dark:text-white cursor-pointer"
            id="file_input"
          />
          <input
            type="text"
            name="title"
            value={product.title ?? ''}
            placeholder="Product name"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={product.price ?? ''}
            placeholder="Price"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={product.category ?? ''}
            placeholder="Category"
            required
            onChange={handleChange}
          />
          <textarea
            type="textarea"
            name="description"
            value={product.description ?? ''}
            placeholder="Description"
            required
            onChange={handleChange}
            cols="50"
            rows="10"
          />

          <input
            type="text"
            name="options"
            value={product.options ?? ''}
            placeholder="Options (separated by commas)"
            required
            onChange={handleChange}
          />
          <Button>{isUploading ? 'Uploading...' : 'Register Product'}</Button>
        </form>
        {file && (
          <img
            className="w-80 h-80 rounded-md"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}
      </div>
    </section>
  );
}
