import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../../actions/protected-data';
import requiresLogin from '../requires-login';
import NavBarLoggedIn from '../navbar-logged-in.js';
import AddNewHabitForm from './add-new-habit-form.js';
import HabitChecklistForm from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import UserSignupForm from '../landingPage/user-registration.js'
import '../../bootstrap.css'
import {addHabit, setDayLog, addLogDate} from '../../actions'


export class UserHomePage extends React.Component{
	componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render(){
		return(
			<div className="Homepage">
				<NavBarLoggedIn firstName={this.props.firstName} />
				{' '}
				<Date label="Record for . . . "setDate={e=> this.props.dispatch(addLogDate(e))}/>
				<HabitChecklistForm date={this.props.date} onSubmit={e=>this.props.dispatch(setDayLog(this.props.date, e))} />
				<AddNewHabitForm addHabit={e=> this.props.dispatch(addHabit(e))} />
			</div>
			)}
    }
	



const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        email: state.auth.currentUser.email,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        date: state.selectedDate
    };
}


export default requiresLogin()(connect(mapStateToProps)(UserHomePage));