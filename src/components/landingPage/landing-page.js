import React from 'react';


import {NavBarLoggedOut} from './navbar-logged-out.js';
import {UserSignupForm} from './user-registration.js';


export function LandingPage(props){

return(
	<div className="LandingPage">
		<NavBarLoggedOut />
		{' '}
		<UserSignupForm />
		{' '}
		
	</div>
	)
	
}