import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DashboardNav } from "./dashboard/DashboardNav";
import { CouponsNav } from "./coupon/CouponsNav";
import { MasterNav } from "./master/MasterNav";
import { MediaNav } from "./media/MediaNav";
import { PaymentNav } from "./payment/PaymentNav";
import { RatingNav } from "./rating/RatingNav";
import { SettingsNav } from "./setting/SettingsNav";
import { CMSNav } from "./cms/CMSNav";
import { UsersNav } from "./users/UsersNav";
import { InviteNav } from "./invite/InviteNav";

export const Header = () => {
  const [nav, setnav] = useState("dashboard");

  const renderNav2 = () => {
    switch (nav) {
      case "dashboard":
        return <DashboardNav />;
      case "users":
        return <UsersNav />;
      case "master":
        return <MasterNav />;
      case "media":
        return <MediaNav />;
      case "coupons":
        return <CouponsNav />;
      case "cms":
        return <CMSNav />;
      case "payment":
        return <PaymentNav />;
      case "rating":
        return <RatingNav />;
      case "settings":
        return <SettingsNav />;
      case "inviteCode":
        return <InviteNav />;
    }
  };

  return (
    <div>
      <div className='top-header'>
        <button className='all4u-btn'>All For You</button>
      </div>
      <nav className='main-nav'>
        <ul>
          <li
            className={nav == "dashboard" ? "active-nav-header" : ""}
            onClick={() => setnav("dashboard")}
          >
            <i class='fas fa-home'></i>
            DASHBOARD
          </li>
          <li
            className={nav == "users" ? "active-nav-header" : ""}
            onClick={() => setnav("users")}
          >
            <i class='fas fa-users'></i>USERS
          </li>
          <li
            className={nav == "master" ? "active-nav-header" : ""}
            onClick={() => setnav("master")}
          >
            <i class='fas fa-sitemap'></i>MASTER
          </li>
          <li
            className={nav == "coupons" ? "active-nav-header" : ""}
            onClick={() => setnav("coupons")}
          >
            <i class='fas fa-tags'></i>COUPON
          </li>
          <li
            className={nav == "media" ? "active-nav-header" : ""}
            onClick={() => setnav("media")}
          >
            <i class='far fa-image'></i> MEDIA
          </li>
          <li
            className={nav == "cms" ? "active-nav-header" : ""}
            onClick={() => setnav("cms")}
          >
            <i class='far fa-file-alt'></i>CMS
          </li>
          <li
            className={nav == "payment" ? "active-nav-header" : ""}
            onClick={() => setnav("payment")}
          >
            <i class='fas fa-coins'></i>PAYMENT
          </li>
          <li
            className={nav == "rating" ? "active-nav-header" : ""}
            onClick={() => setnav("rating")}
          >
            <i class='fas fa-star'></i>RATING
          </li>
          <li
            className={nav == "settings" ? "active-nav-header" : ""}
            onClick={() => setnav("settings")}
          >
            <i class='fas fa-cog'></i>SETTINGS
          </li>
          <li
            className={nav == "inviteCode" ? "active-nav-header" : ""}
            onClick={() => setnav("inviteCode")}
          >
            INVITE CODE
          </li>
        </ul>
      </nav>
      <div className=''>{renderNav2()}</div>
    </div>
  );
};
