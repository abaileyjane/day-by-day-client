import React from 'react';
import{ NavBarLoggedIn} from '../navbar-logged-in.js';
import{AddNewHabitForm} from './add-new-habit-form.js';
import {HabitChecklistForm} from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import {UserSignupForm} from '../landingPage/user-registration.js'
import '../../bootstrap.css'
import {addHabit} from '../../actions'
import {connect} from 'react-redux';


export class UserHomePage extends React.Component{
 render(){
return(
	<div className="Homepage">
		<NavBarLoggedIn firstName={this.props.firstName} />
		{' '}
		<Date />
		<HabitChecklistForm />
		<AddNewHabitForm addHabit={e=> this.props.dispatch(addHabit(e))}/>
		<UserSignupForm />
	</div>
	)
	}
}

const mapStateToProps = (state,props) => ({
	firstName: state.firstName
})

export default connect(mapStateToProps)(UserHomePage)