import React from 'react';
import '../one-page-wonder.css'
import './navbar.css';
import {Logo} from './logo.js';
import {Nav, Navbar, NavItem, Button} from 'react-bootstrap';
import Auth from '../auth';

const auth = new Auth();



export default function NavBar(props){
	const { isAuthenticated, logout } = props.auth;

	let login=function(e) {
		e.preventDefault;
    props.auth.login();}


	let logOut=function(e) {
		e.preventDefault;
		console.log('logout')
    props.auth.logout();}
	return (


		<Navbar className="navbar-custom navbar navbar-expand-lg navbar-dark fixed-top" inverse collapseOnSelect fixedTop fluid>
		  <Navbar.Header>
		    <Navbar.Brand className='navbar-brand'>
		      <h1>Day by Day</h1>
		    </Navbar.Brand>
		    <Navbar.Toggle />

		  </Navbar.Header>

		  <Navbar.Collapse>
		
		  {
              !isAuthenticated() && (
             <Nav className='navbar-nav' pullRight>
             <Navbar.Text className='navbar-text-area' style={{marginTop:15 +'px'}}>
              		Go to :
              		<Navbar.Link className='nav-item nav-link' href="/homepage">My Daily Log</Navbar.Link>
              		<Navbar.Link className='nav-item nav-link' href="/charts">My Progress</Navbar.Link>
              	</Navbar.Text>
             		
	                  <Button className = 'btn-primary'
	                    bsStyle="primary"
	                    className="btn-margin"
	                    onClick={e=>login(e)}
	                  >
	                    Log In
	                  </Button>
                 </Nav>
                )
            }
             {
              isAuthenticated() && (
              	<Nav className='navbar-nav' >
				<Navbar.Text>
              		Go to :
              		<Navbar.Link href="/homepage">My Daily Log</Navbar.Link>
              		<Navbar.Link href="/charts">My Progress</Navbar.Link>
              	</Navbar.Text>
	             <Button className = 'btn-primary'
	                    bsStyle="primary"
	                    className="btn-margin"
	                    onClick={e=>logOut(e)}
	                  >
	                    Log Out
	                  </Button>
                 </Nav>
                )
            }
		  </Navbar.Collapse>
		</Navbar>
	)
}