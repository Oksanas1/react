import React from "react";

export default function Transaction({id, time, from, to, rate, amount}) {
  const timeDate = new Date(time);
  const optionsDate = { day: '2-digit', month: 'short' };
  const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };

  return (
    <li className="transaction" key={id}>
      <span className="transaction__date">{timeDate.toLocaleDateString('en-GB', optionsDate)}</span>
      <span className="transaction__time">{timeDate.toLocaleDateString('en-GB', optionsTime).slice(12)}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </li>
  );
}
