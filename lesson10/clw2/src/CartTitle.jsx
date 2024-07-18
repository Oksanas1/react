import React from "react";

export default function CartTitle({userName, length}) {
  return (
    <div className="cart-title">{userName}, you added {length} items</div>
  );
}