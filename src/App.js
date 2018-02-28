import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {UserHomePage} from './components/userHomePage/userHomePage.js';
import {LandingPage} from './components/landingPage/landing-page.js';
import {ChartsPage} from './components/charts/charts-page.js'

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/homePage/" component={UserHomePage} />
                	<Route exact path="/charts/:userId" component={ChartsPage} />
                </main>
            </div>
        </Router>
    );
}