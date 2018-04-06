import React from 'react';
import {shallow, mount} from 'enzyme';

import Navbar from './navbar';

describe('<Navbar />', ()=>{
	beforeAll(() => {
    const ls = require("../auth-localStorage.js");
    ls.setLocalStorage();
});

	it('Renders without crashing', () => {
    	shallow(<Navbar />);
	});

	it('should render login button',()=>{
		const callback = jest.fn();
		const wrapper=shallow(<Navbar  />)
		expect(wrapper.find('.btn-primary').length).toEqual(1);
	

	})
	


})
