import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './Callback/Callback';
import Auth from '.auth';
import history from './history';
import UserHomePage from './components/userHomePage/userHomePage.js';
import LandingPage from './components/landingPage/landing-page.js';
import ChartsPage from './components/charts/charts-page.js';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <LandingPage auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <UserHomePage auth={auth} {...props} />} />
        <Route path="/charts" render={(props) => <ChartsPage auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 

        }}/>
      </div>
    </Router>
  );
}