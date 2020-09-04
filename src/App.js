import React from "react";
import "./components/styles.css";
import { Route, Router, BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { CouponsMain } from "./components/coupon/CouponsMain";
import { Footer } from "./components/Footer";
import { InviteMain } from "./components/invite/InviteMain";
import { SettingsMain } from "./components/setting/SettingsMain";
import { RatingMain } from "./components/rating/RatingMain";
import { PaymentMain } from "./components/payment/PaymentMain";
import { MasterMain } from "./components/master/MasterMain";
import { MediaMain } from "./components/media/MediaMain";
import { CMSMain } from "./components/cms/CMSMain";
import { UserMain } from "./components/users/UserMain";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path='/' />
        <Route path='/coupons' component={CouponsMain} />
        <Route path='/invitecode' component={InviteMain} />
        <Route path='/settings' component={SettingsMain} />
        <Route path='/rating' component={RatingMain} />
        <Route path='/payment'>
          <PaymentMain />
        </Route>
        <Route path='/master'>
          <MasterMain />
        </Route>
        <Route path='/media'>
          <MediaMain />
        </Route>
        <Route path='/cms'>
          <CMSMain />
        </Route>
        <Route path='/users'>
          <UserMain />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
