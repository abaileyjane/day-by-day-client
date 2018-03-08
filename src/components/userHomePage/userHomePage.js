import React from 'react';
import {connect} from 'react-redux';
import NavBarLoggedIn from '../navbar-logged-in.js';
import AddNewHabitForm from './add-new-habit-form.js';
import HabitChecklistForm from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import UserSignupForm from '../landingPage/user-registration.js'
import '../../bootstrap.css'
import {addHabit, setDayLog, addLogDate} from '../../actions'



export class UserHomePage extends React.Component{
	login() {
    this.props.auth.login();
  }

  componentDidMount(){
  	this.props.dispatch(fetchUser())
  	}
    render(){
    	    const { isAuthenticated } = this.props.auth;

		return(
			<div className="Homepage">
			{isAuthenticated() && (
				<div>
				<NavBarLoggedIn firstName={this.props.firstName} />
				<Date label="Record for . . . " setDate={e=> this.props.dispatch(addLogDate(e))} />
				<HabitChecklistForm date={this.props.date} onSubmit={e=>this.props.dispatch(setDayLog(this.props.date, e))} />
				<AddNewHabitForm addHabit={e=> this.props.dispatch(addHabit(e))} />
				</div>
				)
			}
	        {!isAuthenticated() && (
	              <h4>
	                You are not logged in! Please{' '}
	                <a
	                  style={{ cursor: 'pointer' }}
	                  onClick={this.login.bind(this)}
	                >
	                  Log In
	                </a>
	                {' '}to continue.
	              </h4>
	            )
        }
			</div>
			)}
    }
	



const mapStateToProps = state => {
    
    return {
        date: state.selectedDate
    };
}


export default connect(mapStateToProps)(UserHomePage);