// Image.js
import React from 'react';
import product from './product';

const Image = () => {
  return <img src={product.imageUrl} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default Image;
