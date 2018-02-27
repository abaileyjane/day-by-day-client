import React from 'react';

import './navbar.css';
import {Logo} from './logo.js';
import {Nav, Header, Navbar, Brand, Toggle, Collapse, NavItem} from 'react-bootstrap';


export function NavBarLoggedIn(props){
	
	return (


		<Navbar inverse collapseOnSelect fixedTop fluid>
		  <Navbar.Header>
		    <Navbar.Brand>
		      <a>Day by Day</a>
		    </Navbar.Brand>
		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav>
		      <NavItem eventKey={1} href="#">
		        Daily Log
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        Charts
		      </NavItem>
		    </Nav>
		    <Nav pullRight>
		      <NavItem >
		        Hello {props.firstName}
		      </NavItem>
		      <NavItem eventKey={2} href="#">
		        Log Out
		      </NavItem>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}