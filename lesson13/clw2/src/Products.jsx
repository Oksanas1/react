import React from 'react';
import Product from './Product';
import { Link, Routes, Route } from 'react-router-dom';

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="ball">Ball</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<span>Select a product please</span>} />
        <Route path=":productId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Products;