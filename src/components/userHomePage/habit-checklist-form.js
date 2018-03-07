import React from 'react';

import {connect} from 'react-redux';
import Habit from './single-habit-checkoff.js'

import {FormGroup,FormControl, FieldGroup, ControlLabel, Button} from 'react-bootstrap';
import {removeHabit} from '../../actions'



export function HabitChecklistForm (props){

	const habitButtons = props.habits.map((entry, index)=>{



			return <Habit key={index} habit={entry.title} handleClick={e=>props.dispatch(removeHabit(e))} checked={entry.complete} />
		});



	const handleSubmit = function(e){
			e.preventDefault();
			let setLog = [];
			props.habits.map((entry, index)=>{
				console.log(entry)
				setLog.push( {habit : (entry.props.title),
							complete: entry.props.complete
							})
				})
			
			console.log(setLog, 'setlog');
			props.onSubmit(setLog);

			// location.href='/charts-page'
		}



		return(
			<form id="daily-habit-checklist" onSubmit={handleSubmit}>
				<FormGroup
					controlId="daily-habit-checklist"
				>
					
					<ControlLabel>Daily Log</ControlLabel>
					{habitButtons}
					<Button type='submit' bsStyle="primary" bsSize="large" block>
	            		Log your Day
	          		</Button>
	          	</FormGroup>
	          </form>

		
		
		)
}

const mapStateToProps = (state,props) =>( 
	{habits: state.habits,
		date: state.selectedDate})
 


export default connect(mapStateToProps)(HabitChecklistForm);
