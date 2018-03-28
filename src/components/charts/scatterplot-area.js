import React from 'react';
import {connect} from 'react-redux';
import Date from '../userHomePage/date-picker.js'
import Scatterplot from './scatterplot.js'
import moment from 'moment'
import '../../one-page-wonder.css'
import {setStartDate, setStopDate} from '../../actions'



export  class ScatterplotArea extends React.Component{
	

	render(){
		return(
			<div>
				
				
				<div className='container'>
				
					<div className='row'>
						<div className='col-sm-12'>
							<h4>Displaying data from </h4>
						</div>
					</div>
					<div className='row'>
						<div className = 'col-sm-3'>
						</div>
						<div className='col-sm-3'>
							<Date  placeholder={this.props.startDate} label="Start Date" setDate={e=> this.props.dispatch(setStartDate(e))} />
						</div>
						<div className="col-sm-3">
							<Date placeholder={this.props.stopDate} label="End Date" setDate={e=> this.props.dispatch(setStopDate(e))} />
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-12'>
							<Scatterplot startDate={this.props.startDate} stopDate={this.props.stopDate} />
						</div>
					</div>
				
				</div>
			</div>
	)}
}

const mapStateToProps =state=> {
	return(
	{
  
  startDate: state.startDate,
  stopDate: state.stopDate}
)
}

export default connect(mapStateToProps)(ScatterplotArea)