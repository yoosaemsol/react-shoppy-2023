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
    <section>
      <h2>Register New Product</h2>
      {success && <p>✅ {success}</p>}
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
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
    </section>
  );
}
