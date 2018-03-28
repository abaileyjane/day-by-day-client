import React from 'react';
import {login, logout, isLoggedIn} from '../../auth';
import {shallow, mount} from 'enzyme';

import {UserHomePage} from './userHomePage.js';

describe('<UserHomePage />', ()=>{
	beforeAll(() => {
    const ls = require("../../auth-localStorage.js");
    ls.setLocalStorage();
});

	it('Renders without crashing', () => {
		const dispatch = jest.fn();

    	shallow(<UserHomePage dispatch={dispatch}/>);
	});
})
