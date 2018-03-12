import React from 'react';
import {connect} from 'react-redux'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {formatDate,parseDate,} from 'react-day-picker/moment';
import {addLogDate} from '../../actions';
import moment from 'moment'



export function Date(props){
	const setDate=function(date){
		console.log(date);
		const formattedDate= moment(date).format('MMMM D Y');
		console.log(formattedDate)
		props.setDate(formattedDate)		
	}
	return  (
		<div>
      		<p>{props.label}</p>
      		<DayPickerInput onDayChange={day => {setDate(day);}} format="M/D/YYYY" formatDate={formatDate} parseDate={parseDate} placeholder={props.placeholder} />
    	</div>

    )
}

const mapStateToProps = (state,props) =>(
{

}
)
export default connect(mapStateToProps)(Date);