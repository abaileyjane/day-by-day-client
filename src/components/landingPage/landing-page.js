import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {registerUser} from '../../actions/users';




import NavBarLoggedOut from './navbar-logged-out.js';
import UserSignupForm from './user-registration.js';


export function LandingPage(props){

	if(props.loggedIn){
		return <Redirect to="/homePage" />;
	}
	return(
		<div className="LandingPage">
			<NavBarLoggedOut />
			{' '}
			<UserSignupForm onSubmit={e=> props.dispatch(registerUser(e))} />
			{' '}
			
		</div>
		)	
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage)