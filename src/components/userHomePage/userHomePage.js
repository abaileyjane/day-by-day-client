import React from 'react';
import{ NavBarLoggedIn} from '../navbar-logged-in.js';
import{AddNewHabitForm} from './add-new-habit-form.js';
import {HabitChecklistForm} from './habit-checklist-form.js'
import {Date} from './date-picker.js'


export function UserHomePage(props){

return(
	<div className="navbar">
		<NavBarLoggedIn firstName='userFirstName' />
		<p>Daily List for </p>
		<Date />
		<HabitChecklistForm />
	</div>
	)
	
}