import React from 'react';
import {connect} from 'react-redux';
import UserHomePage from './components/userHomePage/userHomePage.js';
import {LandingPage} from './components/landingPage/landing-page.js';
import ChartsPage from './components/charts/charts-page.js';
import { withRouter, Route} from 'react-router-dom';
import Auth from './auth';
import {Callback} from './callback';
import{createHistory} from './history'
import NavBar from './components/navbar.js';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export class App extends React.Component {


  

    render(){
    console.log(auth)
        return (
            <div>
              <NavBar auth={auth} />

        <Route path="/landingpage" render={(props) => <LandingPage auth={auth} {...props} />} />
        <Route path="/homePage" render={(props) => <UserHomePage auth={auth} {...props} />} />
        <Route path="/charts" render={(props) => <ChartsPage auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 

        }}/>
      </div>
        
        );
    }
}

const mapStateToProps = state => ({
    
});

export default withRouter(connect(mapStateToProps)(App));