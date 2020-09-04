import React from "react";
import { Route, Link } from "react-router-dom";
import { ImageManage } from "./ImageManage";
import { ImageTrash } from "./ImageTrash";
import { ImageAdd } from "./ImageAdd";
import { BannerAdd } from "./BannerAdd";
import { BannerManage } from "./BannerManage";
import { BannerTrash } from "./BannerTrash";

export const MediaMain = () => {
  return (
    <div className='item-content'>
      <h2>MediaMain</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/media/image'>
            <Link to='/media/image/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/media/image/add' className='gray-button'>
              Create
            </Link>
            <Link to='/media/image/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
          <Route path='/media/banner'>
            <Link to='/media/banner/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/media/banner/add' className='gray-button'>
              Create
            </Link>
            <Link to='/media/banner/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
        </div>
        <div className='right-menu'>
          <Route path='/media/image/manage'>
            <ImageManage />
          </Route>
          <Route path='/media/image/add'>
            <ImageAdd />
          </Route>
          <Route path='/media/image/trash'>
            <ImageTrash />
          </Route>

          <Route path='/media/banner/manage'>
            <BannerManage />
          </Route>
          <Route path='/media/banner/add'>
            <BannerAdd />
          </Route>
          <Route path='/media/banner/trash'>
            <BannerTrash />
          </Route>
        </div>
      </div>
    </div>
  );
};
