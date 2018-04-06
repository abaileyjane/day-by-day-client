import React from 'react';
import {shallow, mount} from 'enzyme';

import {LandingPage} from './landing-page.js';

describe('<LandingPage />', ()=>{

	it('Renders without crashing', () => {
    	shallow(<LandingPage />);
	});

	it('should have a signup button and learn more button',()=>{
		const wrapper=shallow(<LandingPage />)
		expect(wrapper.find('.btn').length).toEqual(2)
	})
	
})
