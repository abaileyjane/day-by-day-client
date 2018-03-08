import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserHomePage from './components/userHomePage/userHomePage.js';
import {LandingPage} from './components/landingPage/landing-page.js';
import ChartsPage from './components/charts/charts-page.js';
import { withRouter} from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';

import Auth from './auth.js';



export class App extends React.Component {


  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


    render(){
    const { isAuthenticated } = this.props.auth;

        return (
            <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Day-By-Day</a>
            </Navbar.Brand>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
        
        );
    }
}

const mapStateToProps = state => ({
    
});

export default withRouter(connect(mapStateToProps)(App));