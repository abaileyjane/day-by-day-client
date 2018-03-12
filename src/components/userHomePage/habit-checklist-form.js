import React from 'react';

import {connect} from 'react-redux';
import Habit from './single-habit-checkoff.js'

import {FormGroup,FormControl, FieldGroup, ControlLabel, Button} from 'react-bootstrap';
import {removeHabit, setDayLog} from '../../actions'



export function HabitChecklistForm (props){
	const habits=props.habits;
	function compare(a,b) {
  			if (a.title < b.title)
    			return -1;
  			if (a.title > b.title)
    		return 1;
  			return 0;
			}
	habits.sort(compare);
	const habitButtons = habits.map((entry, index)=>{

			return <Habit key={index} habit={entry.title} handleClick={e=>props.dispatch(removeHabit(e))} checked={entry.complete} />
		});

console.log('habitButtons', habitButtons)

	const handleSubmit = function(e){
			e.preventDefault();
			let setLog = [];
			console.log('this ran and the current props.habits are', props.habits)
			props.habits.map((entry, index)=>{
				console.log(entry)
				setLog.push( {habit : (entry.title),
							complete: entry.complete
							})
				})
			
			console.log(setLog, 'setlog');
			props.dispatch(setDayLog(props.date, setLog));
		}

			console.log(props.dailyLog, 'this is the daily log')


		return(
			<form id="daily-habit-checklist" onSubmit={handleSubmit} className="form-horizontal">
				<FormGroup
					controlId="daily-habit-checklist"
				>
					
					<ControlLabel className='checklist-title'>Today I . . . </ControlLabel>
					<div className='checklist-columns container '>
						<div className='row col-sm-8'>
							{habitButtons}
						</div>
						<div className='row col-sm-8'>
							<div className='col-sm-3'></div>
							<Button type='submit' bsStyle="primary" bsSize="large" className='col-sm-6 logbutton' >
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
