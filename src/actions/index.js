//actions needed: add habit, log day, log in, create user
 import {API_BASE_URL} from '../config'
 import auth0 from 'auth0-js';

 import {getAccessToken} from '../auth';
 const ACCESS_TOKEN_KEY = 'access_token';
 const CLIENT_ID = 'w2fQsODQp6KzxbbsTcFailw5S1zc565c';
const CLIENT_DOMAIN = 'day-by-day.auth0.com';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});



export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = title=>({
	type: ADD_HABIT,
	title
})

export const SET_START_DATE = 'SET_START_DATE';
export const setStartDate = date=>({
    type: SET_START_DATE,
    date
})

export const SET_STOP_DATE = 'SET_STOP_DATE';
export const setStopDate = date=>({
    type: SET_STOP_DATE,
    date
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
   let token = localStorage.getItem(ACCESS_TOKEN_KEY)
  let user1 = auth.client.userInfo(token, function(err, user) { 
       fetch(`${API_BASE_URL}/users/${user.sub}`,{
        method: 'GET',
         headers: {
            'Authorization': `Bearer ${getAccessToken()}`}
  }
    ).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    }); 
});

};

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
});

export const saveUserInfo = (userHabits, userDailyLog) => dispatch => {

  let token = localStorage.getItem(ACCESS_TOKEN_KEY);
  let user1 = auth.client.userInfo(token, function(err, user) { 
  let authUserId = user.sub;
  fetch(`${API_BASE_URL}/users`, {
       method: 'POST',
      headers: {
           'Authorization': `Bearer ${getAccessToken()}`, 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: authUserId,
          habits: userHabits,
          dailyLog: userDailyLog,
        })
}).then(res=>{
	if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(saveUserInfoSuccess(user));

	})
})
}

export const SAVE_USER_INFO_SUCCESS = 'SAVE_USER_INFO_SUCCESS';
export const saveUserInfoSuccess = user => ({
    type: SAVE_USER_INFO_SUCCESS,
    user
});