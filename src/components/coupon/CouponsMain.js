import React, { useState } from "react";
import { Link, Route, Router } from "react-router-dom";

import { List } from "../List";

import { MainManage } from "./MainManage";
import Form from "./Form/Form";
import { MainTrash } from "./MainTrash";

import { MenuManage } from "./MenuManage";
import { MenuCreate } from "./MenuCreate";
import { MenuTrash } from "./MenuTrash";

import { HowToUseCreate } from "./HowToUseCreate";
import { HowToUseManage } from "./HowToUseManage";
import { HowToUseTrash } from "./HowToUseTrash";

import { CancellationCreate } from "./CancellationCreate";
import { CancellationManage } from "./CancellationManage";
import { CancellationTrash } from "./CancellationTrash";

import { ThingsToRememberCreate } from "./ThingsToRememberCreate";
import { ThingsToRememberManage } from "./ThingsToRememberManage";
import { ThingsToRememberTrash } from "./ThingsToRememberTrash";

import { RefundPolicyCreate } from "./RefundPolicyCreate";
import { RefundPolicyManage } from "./RefundPolicyManage";
import { RefundPolicyTrash } from "./RefundPolicyTrash";

import { CodeManage } from "./CodeManage";
import { CodeCreate } from "./CodeCreate";
import { CodeTrash } from "./CodeTrash";

import { RedeemCode } from "./RedeemCode";

import { PromotionalCodeManage } from "./PromotionalCodeManage";
import { PromotionalCodeCreate } from "./PromotionalCodeCreate";
import { PromotionalCodeTrash } from "./PromotionalCodeTrash";

export const CouponsMain = () => {
  const [activeItem, setactiveItem] = useState("manage");

  const listItems = [
    {
      title: "asd",
      merchant: "Lorem, ipsum doloaceat.",
    },
    {
      title: " title no 2",
      merchant: "this is content",
    },
    {
      title: " title no 2",
      merchant: "this is content",
    },
    {
      title: " title no 2",
      merchant: "this is content",
    },
  ];
  const listItems2 = [
    {
      title: "Menu Title",
      merchant: "Lorem, ipsum doloaceat.",
    },
    {
      title: " Another Title",
      merchant: "this is content",
    },
  ];

  const listItems3 = [
    {
      title: "prashant Mehta",
      merchant: "AFUC-BARB-5F30-2367-32F8",
    },
    {
      title: "prashant Mehta",
      merchant: "AFUC-BARB-5F30-2367-32F8",
    },
  ];

  return (
    <div className='item-content'>
      <h2 className='heading'>Coupons</h2>
      <br />
      <div className='item-body'>
        <div className='left-menu'>
          {/* Coupons Main */}
          <Route className='' path='/coupons/main'>
            <Link to='/coupons/main/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link to='/coupons/main/create' className='gray-button'>
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link to='/coupons/main/trash' className='gray-button'>
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Menu */}
          <Route className='' path='/coupons/templates/menu'>
            <Link to='/coupons/templates/menu/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link to='/coupons/templates/menu/create' className='gray-button'>
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link to='/coupons/templates/menu/trash' className='gray-button'>
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates HowToUse */}
          <Route className='' path='/coupons/templates/howtouse'>
            <Link
              to='/coupons/templates/howtouse/manage'
              className='gray-button'
            >
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link
              to='/coupons/templates/howtouse/create'
              className='gray-button'
            >
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link
              to='/coupons/templates/howtouse/trash'
              className='gray-button'
            >
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Canellation policy */}
          <Route className='' path='/coupons/templates/cancellation-policy'>
            <Link
              to='/coupons/templates/cancellation-policy/manage'
              className='gray-button'
            >
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link
              to='/coupons/templates/cancellation-policy/create'
              className='gray-button'
            >
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link
              to='/coupons/templates/cancellation-policy/trash'
              className='gray-button'
            >
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Things To Remember */}
          <Route className='' path='/coupons/templates/things-to-remember'>
            <Link
              to='/coupons/templates/things-to-remember/manage'
              className='gray-button'
            >
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link
              to='/coupons/templates/things-to-remember/create'
              className='gray-button'
            >
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link
              to='/coupons/templates/things-to-remember/trash'
              className='gray-button'
            >
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Refund Policy */}
          <Route className='' path='/coupons/templates/refund-policy'>
            <Link
              to='/coupons/templates/refund-policy/manage'
              className='gray-button'
            >
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link
              to='/coupons/templates/refund-policy/create'
              className='gray-button'
            >
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link
              to='/coupons/templates/refund-policy/trash'
              className='gray-button'
            >
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Code */}
          <Route className='' path='/coupons/code'>
            <Link to='/coupons/code/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link to='/coupons/code/create' className='gray-button'>
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link to='/coupons/code/trash' className='gray-button'>
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>

          {/* Coupons Templates Redeem Code */}
          <Route className='' path='/coupons/redeem-code'>
            <Link to='/coupons/redeem-code/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
          </Route>

          {/* Coupons Templates Promotional Code */}
          <Route className='' path='/coupons/promotional-code'>
            <Link to='/coupons/promotional-code/manage' className='gray-button'>
              <i class='fas fa-cog'></i> Manage
            </Link>
            <Link to='/coupons/promotional-code/create' className='gray-button'>
              <i class='fas fa-plus'></i>
              Create
            </Link>
            <br />
            <Link to='/coupons/promotional-code/trash' className='gray-button'>
              <i class='fas fa-trash'></i>
              trash
            </Link>
          </Route>
        </div>
        <div className='right-menu'>
          <Route exact path='/coupons/main/manage'>
            <MainManage />
          </Route>
          <Route exact path='/coupons/main/create/'>
            <Form />
          </Route>
          <Route exact path='/coupons/main/trash/'>
            <MainTrash />
          </Route>

          <Route exact path='/coupons/templates/menu/manage'>
            <MenuManage />
          </Route>
          <Route exact path='/coupons/templates/menu/create'>
            <MenuCreate />
          </Route>
          <Route exact path='/coupons/templates/menu/trash'>
            <MenuTrash />
          </Route>

          <Route exact path='/coupons/templates/howtouse/manage'>
            <HowToUseManage />
          </Route>
          <Route exact path='/coupons/templates/howtouse/create'>
            <HowToUseCreate />
          </Route>
          <Route exact path='/coupons/templates/howtouse/trash'>
            <HowToUseTrash />
          </Route>

          <Route exact path='/coupons/templates/cancellation-policy/manage'>
            <CancellationManage />
          </Route>
          <Route exact path='/coupons/templates/cancellation-policy/create'>
            <CancellationCreate />
          </Route>
          <Route exact path='/coupons/templates/cancellation-policy/trash'>
            <CancellationTrash />
          </Route>

          <Route exact path='/coupons/templates/things-to-remember/manage'>
            <ThingsToRememberManage />
          </Route>
          <Route exact path='/coupons/templates/things-to-remember/create'>
            <ThingsToRememberCreate />
          </Route>
          <Route exact path='/coupons/templates/things-to-remember/trash'>
            <ThingsToRememberTrash />
          </Route>

          <Route exact path='/coupons/templates/refund-policy/manage'>
            <RefundPolicyManage />
          </Route>
          <Route exact path='/coupons/templates/refund-policy/create'>
            <RefundPolicyCreate />
          </Route>
          <Route exact path='/coupons/templates/refund-policy/trash'>
            <RefundPolicyTrash />
          </Route>

          <Route exact path='/coupons/code/manage'>
            <CodeManage />
          </Route>
          <Route exact path='/coupons/code/create'>
            <CodeCreate />
          </Route>
          <Route exact path='/coupons/code/trash'>
            <CodeTrash />
          </Route>

          <Route path='/coupons/redeem-code/manage'>
            <RedeemCode />
          </Route>

          <Route path='/coupons/promotional-code/manage'>
            <PromotionalCodeManage />
          </Route>
          <Route path='/coupons/promotional-code/create'>
            <PromotionalCodeCreate />
          </Route>
          <Route path='/coupons/promotional-code/trash'>
            <PromotionalCodeTrash />
          </Route>
        </div>
      </div>
    </div>
  );
};
