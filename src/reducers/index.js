import * as actions from '../actions';

const initialState = {
	selectedDate: Date(),
	 id: "5a9605fcf914a53b8cd2ef50",
     firstName: "ben",
     lastName: "f",
     email: "eyjane@gmail.com",
     habits:[
     	{
     		title: "wash dishes",
     		complete: false
     	},
     	{
     		title: "clean room",
     		complete:false
     	},
     	{
     		title: 'do homework',
     		complete:false
     	}
     ],
     dailyLog: [
     	{
     		date: "2-17-1992",
     		log:[
     			{habit: "wash dishes",
     			complete: false},
     			{habit: "clean room",
     			complete: true}
     			]

     	},
     	{
     		date: "2-18-1992",
     		log:[
     			{habit: "wash dishes",
     			complete: false},
     			{habit: "clean room",
     			complete: true}
     			]

     	}
     ]
}

const reducer = (state=initialState, action) =>{
	switch (action.type){
		case 'ADD_HABIT':return Object.assign({}, state, {
			habits: [...state.habits, {
				title: action.title
			}]
		})
		case 'ADD_LOG_DATE': return Object.assign({}, state,{
			selectedDate: action.date
		})
		case 'SET_DAY_LOG': 
			console.log('SET_DAY_LOG firing')
			const logsUpdating = state.dailyLog.filter(function(el){
				el.date!==action.date})
			logsUpdating.push({
				date:action.date,
				log: [action.log]
			})
			console.log(logsUpdating, 'logsUpdating')
			return Object.assign({}, state, {
			dailyLog:[logsUpdating]
			
		})
		case 'REMOVE_HABIT':
			const newHabitList = state.habits.filter(function(el){
				return el.title !== action.habit})
			console.log(newHabitList)
			return Object.assign({}, state,{
			 habits: newHabitList
			})
		case 'CHECKED_CHANGE':
			const habitToChange = state.habits.filter(function(el){
				return el.title===action.title
			})
			if( habitToChange.checked=== true){
				const arrayWithoutChangedHabit = state.habits.filter(function(el){
					return el.title !== action.title
				})
				return Object.assign({}, state, {
					habits: [arrayWithoutChangedHabit,
						{title: action.title,
							complete: false}]
				})
			}
				
				else {
					const arrayWithoutChangedHabit = state.habits.filter(function(el){
					return el.title !== action.title
					})
					return Object.assign({}, state, {
					habits: [arrayWithoutChangedHabit,
						{title: action.title,
							complete: true}]
				})
				}	
		
		default: return state;
	}
}

export default reducer