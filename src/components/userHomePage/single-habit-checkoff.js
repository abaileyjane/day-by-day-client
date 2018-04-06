import React from 'react';
import  {Checkbox, Button} from 'react-bootstrap'
import {changeChecked} from '../../actions'
import {connect} from 'react-redux';

export  class  Habit extends React.Component{

	constructor(props) {
		super(props);
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		event.preventDefault();
		this.props.handleClick(this.props.habit)
	}
	handleChange(event){
		this.props.dispatch(changeChecked(this.props.habit, this.props.checked))

	}


	//make component state, set to false, on cick, set state to true
	render(){
	return (

		<div className="checklist-radio form-inline row text-left">
			<Checkbox className="checkBox input-lg"  onChange={this.handleChange}  >
				{this.props.habit}
			</Checkbox>
			<Button onClick={this.handleClick}  className="btn-xs btn-secondary">Delete</Button>
		</div>
	)
}
}

const mapStateToProps = (state,props) =>( 
	{})
 


export default connect(mapStateToProps)(Habit);
