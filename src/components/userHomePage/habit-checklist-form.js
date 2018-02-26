import React from 'react';

import {Habit} from './single-habit-checkoff.js'

export function HabitChecklistForm(props){
	return(
		<form type='radio'>
			<Habit habit='laundry' completed={true} />
		</form>)
}