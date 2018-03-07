import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';


import '../navbar.css';
import {UserSigninForm} from './user-login.js'
export default function NavBarLoggedOut (props){

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
      <NavItem>
        <h2>Sign In</h2>
      </NavItem>
      <NavItem eventKey={1} href="#">
        <UserSigninForm />
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)}