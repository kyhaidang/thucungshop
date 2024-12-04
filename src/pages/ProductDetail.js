import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.pet.products.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} VND</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
