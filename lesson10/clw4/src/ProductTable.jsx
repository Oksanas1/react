import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  let lastCategory = null;
  const rows = [];

  products.filter(
      ({name, stocked}) => name.includes(filterText) && !(inStockOnly && !stocked))
    .forEach(product => {
      const { name, category } = product;

      if (category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={category}
            key={category} />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={name} />
      );

      lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
