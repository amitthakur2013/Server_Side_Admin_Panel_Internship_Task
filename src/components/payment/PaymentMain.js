import React from "react";
import { Link, Route } from "react-router-dom";
import { PercentageManage } from "./PercentageManage";
import { OrderManage } from "./OrderManage";
import { OrderTrash } from "./OrderTrash";
import { OrderSearch } from "./OrderSearch";

export const PaymentMain = () => {
  return (
    <div className='item-content'>
      <h2>Payment</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/payment/order/'>
            <Link to='/payment/order/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
            <br />
            <Link to='/payment/order/view' className='gray-button'>
              <i class='fas fa-plus'></i>
              View
            </Link>
            <Link to='/payment/order/trash' className='gray-button'>
              <i class='fas fa-plus'></i>
              Trash
            </Link>
            <Link to='/payment/order/search' className='gray-button'>
              <i class='fas fa-plus'></i>
              User Order Search
            </Link>
          </Route>
          <Route path='/payment/percentage/'>
            <Link to='/payment/percantage/manage' className='gray-button'>
              <i class='fas fa-cog'></i>Manage
            </Link>
          </Route>
        </div>
        <div className='right-menu'>
          <Route path='/payment/percentage/manage' exact>
            <PercentageManage />
          </Route>
          <Route path='/payment/order/manage' exact>
            <OrderManage />
          </Route>
          <Route path='/payment/order/trash' exact>
            <OrderTrash />
          </Route>
          <Route path='/payment/order/search' exact>
            <OrderSearch />
          </Route>
        </div>
      </div>
    </div>
  );
};
