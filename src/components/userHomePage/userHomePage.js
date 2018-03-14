import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../navbar.js';
import AddNewHabitForm from './add-new-habit-form.js';
import HabitChecklistForm from './habit-checklist-form.js'
import {Date} from './date-picker.js'
import UserSignupForm from '../landingPage/user-registration.js'
import '../../bootstrap.css'
import {addHabit, setDayLog, addLogDate, fetchUser} from '../../actions'
import {login, logout, isLoggedIn, getAccessToken} from '../../auth';
import Footer from '../footer.js'
import '../../one-page-wonder.css'





export class UserHomePage extends React.Component{

displayProfile() {
  return(
  	 <div>

			<header className="masthead text-center homepage">
      			<div className="masthead-content-auth">
        			<div className="container ">
          				<h1 className="masthead-heading mb-0">My Daily Log</h1>
          				<h2 className="masthead-subheading mb-0">{this.props.date}</h2>
          				<div className="checklist-container">
          					<div className=" container-fluid">
          						<div className='row changeDateContainer'>
	          						<div className='col-sm-4'></div>
	          						<div className='col-sm-4'>
	          							
										<Date label="Change Date" setDate={e=> this.props.dispatch(addLogDate(e))} />
										<h5>Want to log a different date?</h5>
			          				</div>
          						</div>
          						<div className='row'>
          							<h3>Today I . . . </h3>
          						</div>
          						<div className="row col-sm-12 logForm">
	          						<div className='col-sm-12'>							
										<HabitChecklistForm date={this.props.date} setLog={e=>this.props.dispatch(setDayLog(this.props.date, e))} />
									</div>
								</div>
								<div className="row col-sm-12">
								<div className="col-sm-4"></div>
									<div className='col-sm-4 text-center'>
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
componentDidMount(){
	console.log('componenetDidMount')
	this.props.dispatch(fetchUser())
}

    render(){
		return(
			<div className="homepage">
			{isLoggedIn() && (
				this.displayProfile()
				)
			}
	        {!isLoggedIn() && (
	       <div>

			<h2>NOT AUTHENTICATED</h2>
				
				
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