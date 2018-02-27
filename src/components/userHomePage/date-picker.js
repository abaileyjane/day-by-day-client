import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {formatDate,parseDate,} from 'react-day-picker/moment';

export function Date(props){
	return  (
		<div>
      		<p>Daily Log for:</p>
      		<DayPickerInput onDayChange={day => console.log(day)} format="M/D/YYYY" formatDate={formatDate} parseDate={parseDate} placeholder="MM/DD/YYYY" />
    	</div>

    )
}