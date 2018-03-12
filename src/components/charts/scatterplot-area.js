import React from 'react';
import {connect} from 'react-redux';
import Date from '../userHomePage/date-picker.js'
import Scatterplot from './scatterplot.js'
import moment from 'moment'
import '../../one-page-wonder.css'



export default class ScatterplotArea extends React.Component{
	constructor(props){
		super(props);
		this.state={
			stopDate: moment().format('MMMM D Y'),
			startDate:moment().subtract(30, 'days').format('MMMM D Y')
		}
	}

	render(){
		console.log('scatterplot area state', this.state)
		return(
			<div>
				
				<div>
					<Scatterplot startDate={this.state.startDate} stopDate={this.state.stopDate} />
				</div>
			<div>
					<Date  placeholder={this.state.startDate} label="Start Date" setDate={e=> this.setState({startDate: e})} />
					<Date placeholder={this.state.stopDate} label="End Date" setDate={e=> this.setState({stopDate: e})} />
				</div>
				</div>
	)}
}