import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const products = useSelector((state) => state.pet.products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
