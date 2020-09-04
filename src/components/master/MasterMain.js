import React from "react";
import { Link, Route } from "react-router-dom";

import { StateCreate } from "./StateCreate";
import { StateManage } from "./StateManage";
import { StateTrash } from "./StateTrash";
import { CityCreate } from "./CityCreate";
import { CityManage } from "./CityManage";
import { CityTrash } from "./CityTrash";
import { AreaCreate } from "./AreaCreate";
import { AreaManage } from "./AreaManage";
import { AreaTrash } from "./AreaTrash";
import { CuponManage } from "./CuponManage";
import { CuponCreate } from "./CuponCreate";
import { CuponTrash } from "./CuponTrash";

export const MasterMain = () => {
  return (
    <div className='item-content'>
      <h2>Master</h2>
      <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/master/location/state'>
            <Link to='/master/location/state/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/master/location/state/create' className='gray-button'>
              Create
            </Link>
            <Link to='/master/location/state/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
          <Route path='/master/location/city'>
            <Link to='/master/location/city/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/master/location/city/create' className='gray-button'>
              Create
            </Link>
            <Link to='/master/location/city/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
          <Route path='/master/location/area'>
            <Link to='/master/location/area/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/master/location/area/create' className='gray-button'>
              Create
            </Link>
            <Link to='/master/location/area/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
          <Route path='/master/cupon'>
            <Link to='/master/cupon/manage' className='gray-button'>
              Manage
            </Link>
            <Link to='/master/cupon/create' className='gray-button'>
              Create
            </Link>
            <Link to='/master/cupon/trash' className='gray-button'>
              Trash
            </Link>
          </Route>
        </div>
        <div className='right-menu'>
          <Route path='/master/location/state/manage'>
            <StateManage />
          </Route>
          <Route path='/master/location/state/create'>
            <StateCreate />
          </Route>
          <Route path='/master/location/state/trash'>
            {" "}
            <StateTrash />{" "}
          </Route>

          <Route path='/master/location/city/manage'>
            <CityManage />
          </Route>
          <Route path='/master/location/city/create'>
            <CityCreate />
          </Route>
          <Route path='/master/location/city/trash'>
            <CityTrash />
          </Route>

          <Route path='/master/location/area/manage'>
            <AreaManage />
          </Route>
          <Route path='/master/location/area/create'>
            <AreaCreate />
          </Route>
          <Route path='/master/location/area/trash'>
            <AreaTrash />
          </Route>

          <Route path='/master/cupon/manage'>
            <CuponManage />
          </Route>
          <Route path='/master/cupon/create'>
            <CuponCreate />
          </Route>
          <Route path='/master/cupon/trash'>
            <CuponTrash />
          </Route>
        </div>
      </div>
    </div>
  );
};
