import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} VNĐ</p>
    </div>
  );
}

export default ProductItem;
