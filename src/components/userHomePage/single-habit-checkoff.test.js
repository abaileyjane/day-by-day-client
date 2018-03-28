import React from 'react';
import {shallow, mount} from 'enzyme';

import {Habit} from './single-habit-checkoff';

describe('<Habit />', ()=>{

	it('Renders without crashing', () => {
    	shallow(<Habit />);
	});
})
