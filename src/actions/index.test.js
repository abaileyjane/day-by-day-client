

import {ADD_HABIT,  addHabit, SET_DAY_LOG, setDayLog, REMOVE_HABIT, removeHabit, CHANGE_CHECKED, changeChecked, fetchUser, FETCH_USER_SUCCESS, fetchUserSuccess, saveUserInfo, SAVE_USER_INFO_SUCCESS, saveUserInfoSuccess } from './index.js';

describe('addHabit', () =>{
	it('Should return the action', () => {
        const title = 'habit';
        const action = addHabit(title);
        expect(action.type).toEqual(ADD_HABIT);
        expect(action.title).toEqual(title);
    });
})

 


describe('setDayLog', () =>{
	it('Should return the action', () => {
        const log = 'log';
        const date = 'date'
        const action = setDayLog(date, log);
        expect(action.type).toEqual(SET_DAY_LOG);
        expect(action.date).toEqual(date);
        expect(action.log).toEqual(log)
    });
})

describe('removeHabit', () =>{
	it('Should return the action', () => {
        const habit = 'habit';
        const action = removeHabit(habit);
        expect(action.type).toEqual(REMOVE_HABIT);
        expect(action.habit).toEqual(habit);
    });
})

describe('addHabit', () =>{
	it('Should return the action', () => {
        const title = 'habit';
        const action = addHabit(title);
        expect(action.type).toEqual(ADD_HABIT);
        expect(action.title).toEqual(title);
    });
})

describe('changeChecked', () =>{
	it('Should return the action', () => {
        const title = 'habit';
        const complete = 'true'
        const action = changeChecked(title, complete);
        expect(action.type).toEqual(CHANGE_CHECKED);
        expect(action.title).toEqual(title);
    });
})

describe('fetchUser', () =>{
	beforeAll(() => {
    const ls = require("../auth-localStorage.js");
    ls.setLocalStorage();
    global.accessToken= "crazy36^#$&Y*#U3";

});
	
	
})