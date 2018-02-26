import React from 'react';

export function Habit(props){

	return (
		<div className="radio">
			<label>
				<input className='habit' type="radio" id={props.habit} checked={props.completed}/>
			 	{props.habit}
			 </label>
		</div>
	)
}