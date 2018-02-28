import * as actions from '../actions';

const initialState = {
	 id: "5a9605fcf914a53b8cd2ef50",
     firstName: "ben",
     lastName: "f",
     email: "eyjane@gmail.com",
     habits:[
     	{
     		title: "wash dishes"
     	},
     	{
     		title: "clean room"
     	},
     	{
     		title: 'do homework'
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

export const dbdReducer = (state=initialState, action) =>{
	if (action.type === actions.ADD_HABIT){
		return Object.assign({}, state, {
			habits: [...state.habits, {
				title: action.title
			}]
		})
	}
	return state;
}