import React from 'react';
import {NavBarLoggedOut} from './navbar-logged-out.js';
import{ NavBarLoggedIn} from './navbar-logged-in.js';

export function Page(props){

return(
	<div className="navbar">
		<NavBarLoggedIn firstName='Alanna' />
		<NavBarLoggedOut onSubmit={e => console.log(e)}/>
	</div>
	)
	
}