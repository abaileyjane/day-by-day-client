import React from 'react';
import {Nav, Header, Navbar, Brand, Toggle, Collapse, NavItem} from 'react-bootstrap';

import './navbar.css';
import {Logo} from './logo.js';
import {UserSigninForm} from './user-login.js'
export function NavBarLoggedOut (props){
// 	return(
// 		<div className='navbar'>
// 			<div className='nav-bar-left'>
// 				<Logo />
// 			</div>
// 			<div className='nav-bar-right'>
// 				<UserLogin />
// 			</div>

// 		</div>)
// }
return (
<Navbar inverse collapseOnSelect fixedTop fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <a >Day by Day</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
 
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        <UserSigninForm />
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)}