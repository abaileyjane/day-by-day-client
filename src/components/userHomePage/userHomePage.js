import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../navbar.js';
import AddNewHabitForm from './add-new-habit-form.js';
import HabitChecklistForm from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import UserSignupForm from '../landingPage/user-registration.js'
import '../../bootstrap.css'
import {addHabit, setDayLog, addLogDate, fetchUser} from '../../actions'
import Auth from '../../auth';
import Footer from '../footer.js'
import '../../one-page-wonder.css'



const auth = new Auth();

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
			<div className="homepage">
			{isAuthenticated() && (
				<div>
					<div className="header">
						<h2>My Daily Log</h2>
					</div>

					<Date label="Change Date" setDate={e=> this.props.dispatch(addLogDate(e))} />
					<HabitChecklistForm date={this.props.date} setLog={e=>{
						console.log('onsubmit ran');
						this.props.dispatch(setDayLog(this.props.date, e))}} />
					<AddNewHabitForm addHabit={e=> this.props.dispatch(addHabit(e))} />
				</div>
				)
			}
	        {!isAuthenticated() && (
	       <div>

			<header className="masthead text-center homepage">
      			<div className="masthead-content">
        			<div className="container">
          				<h1 className="masthead-heading mb-0">My Daily Log</h1>
          				<h2 className="masthead-subheading mb-0">{this.props.date}</h2>
          				<div className="checklist-container">
          					<div className="changeDateContainer container-fluid">
          						<div className='row'>
	          						<div className='col-sm-4'></div>
	          						<div className='col-sm-4'>
	          							<h5>Want to log a different date?</h5>
										<Date label="Change Date" setDate={e=> this.props.dispatch(addLogDate(e))} />
			          				</div>
          						</div>

          						<div className="row col-sm-12">
	          						<div className='col-sm-8'>							
										<HabitChecklistForm date={this.props.date} setLog={e=>this.props.dispatch(setDayLog(this.props.date, e))} />
									</div>
									<div className='col-sm-4'>
										<h3>Ready to track a new habit?</h3>
										<AddNewHabitForm addHabit={e=> this.props.dispatch(addHabit(e))} />

		          			
		          					</div>
								</div>
							</div>
						</div>							
					</div>
          		</div>
        	</header>
				
				
			</div>
	            )
        }
        <Footer />
			</div>
			)}
    }
	



const mapStateToProps = state => {
    
    return {
        date: state.selectedDate
    };
}


export default connect(mapStateToProps)(UserHomePage);