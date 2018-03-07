import React from 'react';
import  {Checkbox, bsSize, FormControl, Button} from 'react-bootstrap'
import {changeChecked} from '../../actions'

export default class  Habit extends React.Component{

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		event.preventDefault();
		console.log('button clicked')
		this.props.handleClick(this.props.habit)
	}
	handleChange(event){
		event.preventDefault();
		this.props.dispatch(changeChecked(this.props.habit))

	}


	//make component state, set to false, on cick, set state to true
	render(){
	return (
		<div className="radio">
			<Checkbox className="checkBox"  onChange={this.handleChange} checked={this.props.checked} >
				{this.props.habit}
			</Checkbox>
			<Button onClick={this.handleClick}>Delete</Button>
		</div>
	)
}
}

