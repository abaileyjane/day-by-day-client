import React from 'react';

import {Habit} from './single-habit-checkoff.js'

import {FormGroup,FormControl, FieldGroup, ControlLabel, Button} from 'react-bootstrap';

import {connect} from 'react-redux';


export class HabitChecklistForm extends React.Component{

	render(){
		// const habitButtons = this.props.habits.map((entry, index)=>{
		// 	return <Habit key={index} habit={entry} completed={false} />
		// })
		return(
			<div>
				<h1> THis is working</h1>
			</div>

		
		
		)
}}

const mapStateToProps = (state) => 
	console.log(state, "hello lewis")


export default connect(mapStateToProps)(HabitChecklistForm);
