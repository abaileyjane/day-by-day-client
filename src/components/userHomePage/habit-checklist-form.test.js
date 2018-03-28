import React from 'react';
import {shallow, mount} from 'enzyme';

import {HabitChecklistForm} from './habit-checklist-form';

describe('<HabitChecklistForm />', ()=>{

	it('Renders without crashing', () => {
    	shallow(<HabitChecklistForm habits={[{title:'wash dishes', complete:true}]} />);
	});
})
