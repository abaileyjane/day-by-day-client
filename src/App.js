import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserHomePage from './components/userHomePage/userHomePage.js';
import {LandingPage} from './components/landingPage/landing-page.js';
import ChartsPage from './components/charts/charts-page.js';
import {refreshAuthToken} from './actions/auth';
import { withRouter} from 'react-router-dom';



export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    render(){
        return (
            <Router>
                <div className="app">
                    <main>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/homePage/" component={UserHomePage} />
                    	<Route exact path="/charts/" component={ChartsPage} />
                    </main>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));