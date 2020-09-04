import React from "react";
import { Link, Route } from "react-router-dom";
import { InviteManage } from "./InviteManage";
import { FormCreateInvite } from "./FormCreateInvite";

export const InviteMain = () => {
  return (
    <div className='item-content'>
      <h2>Invite Code</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Link to='/invitecode/manage' className='gray-button'>
            <i class='fas fa-cog'></i> Manage
          </Link>
          <br />
          <Link to='/invitecode/create' className='gray-button'>
            <i class='fas fa-plus'></i>
            Create
          </Link>
          <br />
        </div>
        <div className='right-menu'>
          <Route path='/invitecode/manage'>
            <InviteManage items={items} />
          </Route>
          <Route path='/invitecode/create'>
            <FormCreateInvite items={items} />
          </Route>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    name: "someone",
    number: 98463217,
  },
];
