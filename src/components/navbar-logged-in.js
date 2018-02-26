import React from 'react';

import './navbar.css';
import {Logo} from './logo.js';

export function NavBarLoggedIn(props){
	
	return (
		<div className='navbar'>
			<div className='nav-bar-left'>
				<Logo />
				<p>Daily Log</p>
				<p>Charts</p>
			</div>
			<div className='nav-bar-right'>
				<h3>Hello {props.firstName}!</h3>
				<p>Log Out</p>
			</div>

		</div>
	)
}