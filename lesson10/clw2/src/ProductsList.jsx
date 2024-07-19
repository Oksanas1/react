import React from "react";

export default function ProductsList({cartItems}) {
  const renderItem = (id, name, price) => (
    <li key={id} className="products__list-item">
      <span className="products__item-name">{name}</span>
      <span className="products__item-price">{price}</span>
    </li>);

  const count = cartItems.reduce((acc, value) => acc + +value.price.replace('$', ''), 0);

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({id, name, price}) => renderItem(id, name, price))}
      </ul>
    <div className="products__total">Total: ${count}</div>
  </div>
  );
}