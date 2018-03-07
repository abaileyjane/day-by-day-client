//actions needed: add habit, log day, log in, create user

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = title=>({
	type: ADD_HABIT,
	title
})

export const ADD_LOG_DATE = 'ADD_LOG_DATE';
export const addLogDate  = date=>({
	type: ADD_LOG_DATE,
	date
})

export const SET_DAY_LOG = 'SET_DAY_LOG';
export const setDayLog = (date, log) =>({
	type:setDayLog,
	date,
	log
})

export const REMOVE_HABIT = 'REMOVE_HABIT';
export const removeHabit = habit =>({
	type:REMOVE_HABIT,
	habit
})

export const CHANGE_CHECKED = 'CHANGE_CHECKED';
export const changeChecked= title => ({
	type: CHANGE_CHECKED,
	title
})