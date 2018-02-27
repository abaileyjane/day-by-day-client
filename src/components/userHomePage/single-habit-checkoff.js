import React from 'react';
import  {Checkbox, bsSize, FormControl} from 'react-bootstrap'

export function Habit(props){

	return (
		<div className="radio">
			
			<Checkbox  checked={props.completed}>
				{props.habit}
			</Checkbox>
		</div>
	)
}