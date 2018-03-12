import * as actions from '../actions';
import moment from 'moment'


const initialState = {
	selectedDate: moment().format('MMMM D Y'),
     habits:[{title:'wash dishes',complete:false},{title: 'do homeword', complete:false}],
     dailyLog: []
}

const Reducer = (state=initialState, action) =>{
	switch (action.type){
		case 'ADD_HABIT':return Object.assign({}, state, {
			habits: [...state.habits, {
				title: action.title,
				complete: false
			}]
		})
		case 'ADD_LOG_DATE': return Object.assign({}, state,{
			selectedDate: action.date
		})

		case 'SET_DAY_LOG': 
			console.log('SET_DAY_LOG firing, state.dailyLog', state.dailyLog)
			const logsUpdating = state.dailyLog
			logsUpdating.push({
				date:action.date,
				log: action.log
			})
			console.log(logsUpdating, 'logsUpdating')
			return Object.assign({}, state, {
			dailyLog:logsUpdating
			
		})
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
				// habits: action.user.habits,
				// dailyLog: action.user.dailyLog
			})

		case 'SAVE_USER_INFO_SUCCESS':
			//send user to charts page and clear checkboxes
			

		
		default: return state;
	}
}

export default Reducer