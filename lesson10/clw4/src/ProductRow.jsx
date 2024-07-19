import React from "react";

const ProductRow = ({ product }) => {
  const {name, price, stocked} = product;
  const nameProduct = stocked ? name : (
    <span style={{ color: 'red' }}>{name}</span>);

  return (
    <tr>
      <td>{nameProduct}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;