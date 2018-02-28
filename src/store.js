import {createStore} from 'redux'

import {dbdReducer} from './reducers';

export default createStore(dbdReducer);