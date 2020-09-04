import React from "react";
import { Link } from "react-router-dom";

export const PaymentNav = () => {
  return (
    <ul className='nav2'>
      <li>
        <Link to='/payment/order/manage'>Order</Link>
      </li>
      <li>
        <Link to='/payment/percentage/manage'>Percentage</Link>
      </li>
    </ul>
  );
};
