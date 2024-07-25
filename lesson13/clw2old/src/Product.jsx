import React from 'react';

const Product = ({ match }) => {
  const { productId } = match.params;
  return (
    <div className="product">{productId}</div>
  );
};

export default Product;