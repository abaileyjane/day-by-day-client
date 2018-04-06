import React from 'react';

import {connect} from 'react-redux';
import Habit from './single-habit-checkoff.js'

import {FormGroup, Button} from 'react-bootstrap';
import {removeHabit, saveUserInfo} from '../../actions'



export function HabitChecklistForm (props){
	const habits=props.habits;
	
	const habitButtons = habits.map((entry, index)=>{

			return <Habit key={index} habit={entry.title} handleClick={e=>props.dispatch(removeHabit(e))} checked={entry.complete} />
		});

	


	const handleSubmit = function(e){
			e.preventDefault();
			let setLog = [];
			props.habits.map((entry, index)=>{
				setLog.push( {habit : (entry.title),
							complete: entry.complete
							})
				})

			
			const updatedDailyLog = props.dailyLog.map(function(item, index){
				if(item.date === props.date){
					return ({date:props.date,
				log: setLog})
				}
				else{
					return item
				}
			})
			props.dispatch(saveUserInfo(props.habits, updatedDailyLog));
			}


		return(
			<form id="daily-habit-checklist" onSubmit={e=>handleSubmit(e)} className="form-horizontal">
				<FormGroup
					controlId="daily-habit-checklist">
					
					<div className="col-xs-3"></div>
					<div className='checklist-columns container col-xs-6 '>
						<div className='row'>
							<div className='text-center '>
								{habitButtons}
							</div>
						</div>
						<div className='row col-sm-12'>
							<div className='col-sm-3'></div>
							<Button type='submit' bsStyle="primary" bsSize="large" className='col-sm-6 logbutton text-center' >
	            				Log your Day
	          				</Button>
	          			</div>
	          		</div>
	          	</FormGroup>
	          </form>

		
		
		)
}

const mapStateToProps = (state,props) =>( 
	{habits: state.habits,
	date: state.selectedDate,
	dailyLog: state.dailyLog})
 


export default connect(mapStateToProps)(HabitChecklistForm);
