import React from 'react';
import{ NavBarLoggedIn} from '../navbar-logged-in.js';
import{AddNewHabitForm} from './add-new-habit-form.js';
import {HabitChecklistForm} from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import {UserSignupForm} from '../user-registration.js'
import '../../bootstrap.css'
import '../../one-page-wonder.css'

export function UserHomePage(props){

return(
	<div className="Homepage">
		<NavBarLoggedIn firstName='userFirstName' />
		{' '}
		<Date />
		<HabitChecklistForm />
		<AddNewHabitForm />
		<UserSignupForm />
	</div>
	)
	
}