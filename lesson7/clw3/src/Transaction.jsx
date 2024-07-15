import React from "react";
const moment = require('moment');

export default function Transaction({time, from, to, rate, amount}) {
  const timeDate = new Date(time);

  return (
    <li className="transaction">
      <span className="transaction__date">{moment(timeDate).format('DD MMM')}</span>
      <span className="transaction__time">{moment(timeDate).utc().format('HH:mm')}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
}
