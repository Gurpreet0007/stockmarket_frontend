import React, { Component } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';




const User = () => {
  
  return (
    <>
      <Nav>
       
        <Bars />
        <NavMenu>
          <NavLink to="/user/getipos" activeStyle>
            IPO
          </NavLink>
          <NavLink to='/user/listcompanies' activeStyle>
            List Companies
          </NavLink>
          <NavLink to='/user/Charts' activeStyle>
            Charts
          </NavLink>
          
          
        </NavMenu>

      </Nav>
    </>
  );
};

export default User;