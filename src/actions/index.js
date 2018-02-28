//actions needed: add habit, log day, log in, create user

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = title=>({
	type: ADD_HABIT,
	title
})