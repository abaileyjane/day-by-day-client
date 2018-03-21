import * as actions from '../actions';
import moment from 'moment'


function generateBlankLogs(){
	var blankLogs = new Array();
  
        var currentDate = moment().subtract(90,'days');
        
        var stopDate = moment().add(1, 'year');
        while (currentDate <= stopDate) {
            blankLogs.push( {date: moment(currentDate).format('MMMM D Y'), log:[]} )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return blankLogs
}
const originalLogs = generateBlankLogs()

const initialState = {
	selectedDate: moment().format('MMMM D Y'),
	stopDate: moment().format('MMMM D Y'),
	startDate:moment().subtract(30, 'days').format('MMMM D Y'),
     habits:[{title:'wash dishes',complete:false},{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
     dailyLog: originalLogs
}



const Reducer = (state=initialState, action) =>{
	switch (action.type){
		case 'ADD_HABIT':return Object.assign({}, state, {
			habits: [...state.habits, {
				title: action.title,
				complete: false
			}]
		})

		case'SET_START_DATE': return Object.assign({}, state, {
			startDate: action.date
		})

		case'SET_STOP_DATE': return Object.assign({}, state, {
			stopDate: action.date
		})

		case 'ADD_LOG_DATE': return Object.assign({}, state,{
			selectedDate: action.date
		})

		case 'SET_DAY_LOG':
					
			const updatedDailyLog = state.dailyLog.map(function(item, index){
				if(item.date === action.date){
					return ({date:action.date,
				log: action.log})
				}
				else{
					return item
				}
			})
			console.log('updatedDailyLog', updatedDailyLog)
			return Object.assign({}, state, {
			dailyLog:updatedDailyLog
			}

)
		case 'REMOVE_HABIT':
			const newHabitList = state.habits.filter(function(el){
				return el.title !== action.habit})
			console.log(newHabitList)
			return Object.assign({}, state,{
			 habits: newHabitList
			})
		case 'CHANGE_CHECKED':

		function compare(a,b) {
  			if (a.title < b.title)
    			return -1;
  			if (a.title > b.title)
    		return 1;
  			return 0;
			}


			const habitToChange = state.habits.filter(function(el){

				return el.title===action.title
			})
			console.log('checked change', action.complete)
			if( action.complete=== true){
				console.log('ITS TRUE, IT WAS CHECKED')
				const arrayWithoutChangedHabit = state.habits.filter(function(el){
					return el.title !== action.title
				})
				arrayWithoutChangedHabit.push(
						{title: action.title,
							complete: false})
				arrayWithoutChangedHabit.sort(compare)
				return Object.assign({}, state, {
					habits: arrayWithoutChangedHabit,
						
				})
			}
				
			else {
					const arrayWithoutChangedHabit = state.habits.filter(function(el){
					return el.title !== action.title
					})
					arrayWithoutChangedHabit.push(
						{title: action.title,
							complete: true})
					arrayWithoutChangedHabit.sort(compare)
					return Object.assign({}, state, {
					habits: arrayWithoutChangedHabit
				})
				}
			console.log('after habits', state.habits)
		case 'FETCH_USER_SUCCESS': 	
			return Object.assign({}, state, {
				habits: action.user.habits,
				dailyLog: action.user.dailyLog
			})

		case 'SAVE_USER_INFO_SUCCESS':
				console.log('SAVE_USER_INFO_SUCCESS ran', state)
				window.location.href = "/charts";

				Object.assign({}, state, {
				habits: action.user.habits,
				dailyLog: action.user.dailyLog
			})


		
		default: return state;
	}
}

export default Reducer