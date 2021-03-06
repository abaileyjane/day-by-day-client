import moment from 'moment'


function generateBlankLogs(){
	var blankLogs = [];
  
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
	startDate:'',
     habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
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
			const revisedHabits = state.habits.map(function(item){
				if(action.title === item.title){
					return {title:item.title, complete: !item.complete}
				}
				else {
					return item
				}
			})
			return Object.assign({}, state, {
					habits: revisedHabits,
				})

			
			

		case 'FETCH_USER_SUCCESS': 	
			return Object.assign({}, state, {
				habits: action.user.habits,
				dailyLog: action.user.dailyLog
			})

		case 'SAVE_USER_INFO_SUCCESS':
				window.location.href = "/charts";

				return Object.assign({}, state, {
				habits: action.user.habits,
				dailyLog: action.user.dailyLog
			})


		
		default: return state;
	}
}

export default Reducer