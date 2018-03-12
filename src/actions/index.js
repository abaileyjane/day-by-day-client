//actions needed: add habit, log day, log in, create user
 import {API_BASE_URL} from '../config'


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
	type:SET_DAY_LOG,
	date,
	log
})

export const REMOVE_HABIT = 'REMOVE_HABIT';
export const removeHabit = habit =>({
	type:REMOVE_HABIT,
	habit
})

export const CHANGE_CHECKED = 'CHANGE_CHECKED';
export const changeChecked= (title, complete) => ({
	type: CHANGE_CHECKED,
	title,
	complete
})

export const fetchUser = () => dispatch => {
    fetch(`${API_BASE_URL}/users`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    });
};

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
});

export const saveUserInfo = (user) => dispatch => {
    fetch(`${API_BASE_URL}/users`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    habits: user.habits,
    dailyLog: user.dailyLog,
  })
}).then(res=>{
	if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(saveUserInfoSuccess(user));

	})
}

export const SAVE_USER_INFO_SUCCESS = 'SAVE_USER_INFO_SUCCESS';
export const saveUserInfoSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
});