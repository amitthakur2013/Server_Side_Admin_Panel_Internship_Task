import React from "react";
import { Link, Route } from "react-router-dom";

import { Trending } from "./Trending";
import { Things } from "./Things";
import { Popular } from "./Popular";
import { ContentManage } from "./ContentManage";
import { ContentCreate } from "./ContentCreate";
import { ContentTrash } from "./ContentTrash";
import { ContentBlockCreate } from "./ContentBlockCreate";
import { ContentBlockManage } from "./ContentBlockManage";
import { ContentBlockTrash } from "./ContentBlockTrash";

export const CMSMain = () => {
  return (
    <div className='item-content'>
      <h2>CMSMain</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/cms/home'>
            <Link to='/cms/home/trending' className='gray-button'>
              Trending
            </Link>
            <Link to='/cms/home/popular' className='gray-button'>
              Popular
            </Link>
            <Link to='/cms/home/things-to-do' className='gray-button'>
              Things To Do
            </Link>
          </Route>
          <Route path='/cms/content'>
            <Link to='/cms/content/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/cms/content/create' className='gray-button'>
              Create
            </Link>
            <Link to='/cms/content/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
          <Route path='/cms/content-block'>
            <Link to='/cms/content-block/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/cms/content-block/create' className='gray-button'>
              Create
            </Link>
            <Link to='/cms/content-block/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
        </div>
        <div className='right-menu'>
          <Route path='/cms/home/trending'>
            <Trending />
          </Route>
          <Route path='/cms/home/popular'>
            <Popular />
          </Route>
          <Route path='/cms/home/things-to-do'>
            <Things />
          </Route>

          <Route path='/cms/content/manage'>
            <ContentManage />
          </Route>
          <Route path='/cms/content/create'>
            <ContentCreate />
          </Route>
          <Route path='/cms/content/trash'>
            <ContentTrash />
          </Route>

          <Route path='/cms/content-block/manage'>
            <ContentBlockManage />
          </Route>
          <Route path='/cms/content-block/create'>
            <ContentBlockCreate />
          </Route>
          <Route path='/cms/content-block/trash'>
            <ContentBlockTrash />
          </Route>
        </div>
      </div>
    </div>
  );
};
