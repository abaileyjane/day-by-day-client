import Reducer from './index';
import moment from 'moment'
import {addHabit, saveUserInfoSuccess, setStartDate, setStopDate, addLogDate, setDayLog, removeHabit, changeChecked, fetchUserSuccess} from '../actions';


describe('Reducer', () =>{
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
	it('Should set the initial state when nothing is passed in',()=>{
		const state = Reducer(undefined,{type:'__UNKNOWN'});
		
		expect(state).toEqual({
			selectedDate: moment().format('MMMM D Y'),
			stopDate: moment().format('MMMM D Y'),
			startDate:moment().subtract(30, 'days').format('MMMM D Y'),
		    habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
		    dailyLog: originalLogs
		})
	})

	 it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = Reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	 describe('ADDHABIT',()=>{
	 	it('Should add a new habit', ()=>{
	 		let state
	 		state=Reducer(state, addHabit('wash dishes'))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false},{title:'wash dishes', complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })

	 describe('SET_START_DATE',()=>{
	 	it('Should reset the startdate', ()=>{
	 		let state
	 		state=Reducer(state, setStartDate(moment().subtract(3, 'days').format('MMMM D Y')))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(3, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })

	 describe('SET_STOP_DATE',()=>{
	 	it('Should reset the stopdate', ()=>{
	 		let state
	 		state=Reducer(state, setStopDate(moment().subtract(3, 'days').format('MMMM D Y')))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().subtract(3, 'days').format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })
	 describe('SET_LOG_DATE',()=>{
	 	it('Should reset the selectedDate', ()=>{
	 		let state
	 		state=Reducer(state, addLogDate(moment().subtract(3, 'days').format('MMMM D Y')))
	 		expect(state).toEqual({
				selectedDate: moment().subtract(3, 'days').format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:false},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })

	 describe('REMOVE_HABIT',()=>{
	 	it('Should remove  a habit from the list', ()=>{
	 		let state
	 		state=Reducer(state, removeHabit('do homework'))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:false},{title:'go shopping',complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })
	 describe('CHECK CHANGED',()=>{
	 	it('Should change the true or false value of a habit', ()=>{
	 		let state
	 		state=Reducer(state, changeChecked('Clean Room', false))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'Clean Room',complete:true},{title: 'do homework', complete:false},{title:'go shopping',complete:false}],
			    dailyLog: originalLogs
			})
	 			
	 	})
	 })

	 describe('FETCHUSERSUCCESS',()=>{
	 	it('Should update habits and dailylog to userinfo', ()=>{
	 		let state
	 		let user = {habits:[{title:'wash dishes', complete:false}], dailyLog:[]}
	 		state=Reducer(state, fetchUserSuccess(user))
	 		expect(state).toEqual({
				selectedDate: moment().format('MMMM D Y'),
				stopDate: moment().format('MMMM D Y'),
				startDate:moment().subtract(30, 'days').format('MMMM D Y'),
			    habits:[{title:'wash dishes', complete:false}],
			    dailyLog: []
			})
	 			
	 	})

	 
	})
})