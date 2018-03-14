import React from 'react';
import {connect} from 'react-redux';
import UserHomePage from './components/userHomePage/userHomePage.js';
import {LandingPage} from './components/landingPage/landing-page.js';
import ChartsPage from './components/charts/charts-page.js';
import { withRouter, Route} from 'react-router-dom';
import {Callback} from './callback';
import{createHistory} from './history'
import NavBar from './components/navbar.js';




export class App extends React.Component {


  

    render(){
        return (
            <div>
        <NavBar  />

        <Route path="/landingpage" render={(props) => <LandingPage {...props} />} />
        <Route path="/homePage" render={(props) => <UserHomePage  {...props} />} />
        <Route path="/charts" render={(props) => <ChartsPage  {...props} />} />
        <Route path="/callback" render={(props) => {
          return <Callback {...props} /> 

        }}/>
      </div>
        
        );
    }
}

const mapStateToProps = state => ({
    
});

export default withRouter(connect(mapStateToProps)(App));