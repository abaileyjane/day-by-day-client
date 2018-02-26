import React from 'react';

import './navbar.css';
import {Logo} from './logo.js';
import {UserLogin} from './user-login.js'
export function NavBarLoggedOut (props){
	return(
		<div className='navbar'>
			<div className='nav-bar-left'>
				<Logo />
			</div>
			<div className='nav-bar-right'>
				<UserLogin />
			</div>

		</div>)
}