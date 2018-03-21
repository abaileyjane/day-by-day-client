import React from 'react';

import {connect} from 'react-redux';
import Habit from './single-habit-checkoff.js'
import {getAccessToken} from '../../auth';

import {FormGroup,FormControl, FieldGroup, ControlLabel, Button} from 'react-bootstrap';
import {removeHabit, setDayLog, saveUserInfo} from '../../actions'



export function HabitChecklistForm (props){
	const habits=props.habits;
	function compare(a,b) {
  			if (a.title < b.title)
    			return -1;
  			if (a.title > b.title)
    		return 1;
  			return 0;
			}
	habits.sort(compare);
	const habitButtons = habits.map((entry, index)=>{

			return <Habit key={index} habit={entry.title} handleClick={e=>props.dispatch(removeHabit(e))} checked={entry.complete} />
		});

	


	const handleSubmit = function(e){
			e.preventDefault();
			let setLog = [];
			console.log('this ran and the current props.habits are', props.habits)
			props.habits.map((entry, index)=>{
				console.log(entry)
				setLog.push( {habit : (entry.title),
							complete: entry.complete
							})
				})

			
			console.log(setLog, 'setlog');
			const updatedDailyLog = props.dailyLog.map(function(item, index){
				if(item.date === props.date){
					return ({date:props.date,
				log: setLog})
				}
				else{
					return item
				}
			})
			console.log('updatedDailyLog', updatedDailyLog)
			props.dispatch(saveUserInfo(props.habits, updatedDailyLog));
			}

// const pullrequest = function(){
// 	console.log('pullrequest function ran', props.dailyLog)

// 				props.dispatch(saveUserInfo(props.habits, props.dailyLog))
// }


		return(
			<form id="daily-habit-checklist" onSubmit={e=>handleSubmit(e)} className="form-horizontal">
				<FormGroup
					controlId="daily-habit-checklist">
					
					<div className="col-xs-3"></div>
					<div className='checklist-columns container col-xs-6 '>
						<div className='row'>
							<div className='text-center '>
								{habitButtons}
							</div>
						</div>
						<div className='row col-sm-12'>
							<div className='col-sm-3'></div>
							<Button type='submit' bsStyle="primary" bsSize="large" className='col-sm-6 logbutton text-center' >
	            				Log your Day
	          				</Button>
	          			</div>
	          		</div>
	          	</FormGroup>
	          </form>

		
		
		)
}

const mapStateToProps = (state,props) =>( 
	{habits: state.habits,
	date: state.selectedDate,
	dailyLog: state.dailyLog})
 


export default connect(mapStateToProps)(HabitChecklistForm);
