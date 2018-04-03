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

	it('should simulate click',()=>{
		const callback = jest.fn();
		const wrapper=shallow(<Navbar onClick={callback} />)
		expect(wrapper.find('button')).to.have.length(1)
	})
	


})
