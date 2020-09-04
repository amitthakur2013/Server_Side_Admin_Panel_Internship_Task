import React from "react";
import { Link, Route } from "react-router-dom";

import { AdminCreate } from "./AdminCreate";
import { AdminManage } from "./AdminManage";
import { AdminTrash } from "./AdminTrash";

import { UserManage } from "./UserManage";
import { UserCreate } from "./UserCreate";
import { UserTrash } from "./UserTrash";
import { UserActivity } from "./UserActivity";

import { MerchantManage } from "./MerchantManage";
import { MerchantCreate } from "./MerchantCreate";
import CreateMerchant from "./Form/CreateMerchant";
import { MerchantTrash } from "./MerchantTrash";
import { Enquiry } from "./Enquiry";

export const UserMain = () => {
  return (
    <div className='item-content'>
      <h2>UserMain</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/users/admin'>
            <Link to='/users/admin/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/users/admin/create' className='gray-button'>
              Create
            </Link>
            <Link to='/users/admin/trash' className='gray-button'>
              Trash
            </Link>
          </Route>

          <Route path='/users/merchant'>
            <Link to='/users/merchant/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/users/merchant/create' className='gray-button'>
              Create
            </Link>
            <Link to='/users/merchant/trash' className='gray-button'>
              Trash
            </Link>
            <Link to='/users/merchant/enquiry' className='gray-button'>
              Enquiry
            </Link>
          </Route>

          <Route path='/users/user'>
            <Link to='/users/user/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/users/user/create' className='gray-button'>
              Create
            </Link>
            <Link to='/users/user/trash' className='gray-button'>
              Trash
            </Link>
            <Link to='/users/user/activity' className='gray-button'>
              Activity
            </Link>
          </Route>
        </div>
        {/* Right MENU */}
        <div className='right-menu'>
          <Route path='/users/admin/manage'>
            <AdminManage />
          </Route>
          <Route path='/users/admin/create'>
            <AdminCreate />
          </Route>
          <Route path='/users/admin/trash'>
            <AdminTrash />
          </Route>

          <Route path='/users/merchant/manage'>
            <MerchantManage />
          </Route>
          <Route path='/users/merchant/create'>
            <CreateMerchant />
          </Route>
          <Route path='/users/merchant/trash'>
            <MerchantTrash />
          </Route>
          <Route path='/users/merchant/enquiry'>
            <Enquiry />
          </Route>

          <Route path='/users/user/manage'>
            <UserManage />
          </Route>
          <Route path='/users/user/create'>
            <UserCreate />
          </Route>
          <Route path='/users/user/trash'>
            <UserTrash />
          </Route>
          <Route path='/users/user/activity'>
            <UserActivity />
          </Route>
        </div>
      </div>
    </div>
  );
};
