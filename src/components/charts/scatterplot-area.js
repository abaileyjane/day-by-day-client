import React from 'react';
import {connect} from 'react-redux';
import Date from '../userHomePage/date-picker.js'
import Scatterplot from './scatterplot.js'


export default class ScatterplotArea extends React.Component{
	constructor(props){
		super(props);
		this.state={
			startDate:"Thr Mar 01 2018 20:00:00 GMT-0400 (Eastern Daylight Time)",
			stopDate:"Tue Mar 20 2018 20:00:00 GMT-0400 (Eastern Daylight Time)"
		}
	}

	render(){
		return(
			<div>
				<div>
					<Date label="Start Date" setDate={e=> this.setState({startDate: e})} />
					<Date label="End Date" setDate={e=> this.setState({startDate: e})} />
				</div>
				<div>
					<Scatterplot startDate={this.state.startDate} stopDate={this.state.stopDate} />
				</div>
			</div>
	)}
}