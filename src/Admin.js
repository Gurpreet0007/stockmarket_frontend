import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';

const Admin = () => {
  return (
    <>
      <Nav>
       
        <Bars />
        <NavMenu>
          <NavLink to="/admin/file" activeStyle>
            Import Data
          </NavLink>
          
          <NavLink to="/admin/addcompany" activeStyle>
            Add Company
          </NavLink>
          <NavLink to="/admin/updatecompany" activeStyle>
            Update Company
          </NavLink>
          <NavLink to="/admin/addstockexchange" activeStyle>
            Add StockExchange
          </NavLink>
          <NavLink to="/admin/addsector" activeStyle>
            Add Sector
          </NavLink>
          
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Admin;



