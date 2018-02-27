import React from 'react';

import {Habit} from './single-habit-checkoff.js'

import {FormGroup,FormControl, bsSize, FieldGroup, ControlLabel, Button} from 'react-bootstrap';


export function HabitChecklistForm(props){
	const habitList=['laundry', 'feed cat', 'water plants'];
	const habitButtons = habitList.map((entry, index)=>{
		return <Habit key={index} habit={entry} completed={false} />
	})

	return(
		<form>
			<FormGroup
				controlId="daily-habit-checklist"
			>
				
				<ControlLabel>Daily Log</ControlLabel>
				{habitButtons}
				<Button bsStyle="primary" bsSize="large" block>
            		Log your Day
          		</Button>
          	</FormGroup>
          </form>

	
	
		)
} 