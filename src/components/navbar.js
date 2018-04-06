import React from 'react';
import '../one-page-wonder.css'
import {Nav, Navbar, Button} from 'react-bootstrap';
import {login, logout, isLoggedIn} from '../auth';




export default function NavBar(props){
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
              !isLoggedIn() && (
             <Nav className='navbar-nav' pullRight>
     
             		
	                  <Button className = 'btn-primary btn-margin'
	                    bsStyle="primary"
	            
	                    onClick={()=>login()}
	                  >
	                    Log In
	                  </Button>
                 </Nav>
                )
            }
             {
              isLoggedIn() && (
              	<Nav className='navbar-nav' pullRight >
				<Navbar.Text className='navbar-text-area'>
              		Go to :
              		<Navbar.Link className='nav-item' href="/homepage">My Daily Log</Navbar.Link>
              		<Navbar.Link className='nav-item' href="/charts">My Progress</Navbar.Link>
              	</Navbar.Text>
	             <Button className = 'btn-primary btn-margin'
	                    bsStyle="primary"
	                 
	                    onClick={()=>logout()}
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