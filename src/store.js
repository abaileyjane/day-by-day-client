import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ReduxThunk from 'redux-thunk';

const store = createStore()
import {Reducer} from './reducers';

export default createStore(Reducer, applyMiddleware(thunk));
