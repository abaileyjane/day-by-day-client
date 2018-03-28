import React from 'react';
import {shallow, mount} from 'enzyme';

import AddNewHabitForm from './add-new-habit-form';

describe('<AddNewHabitForm />', ()=>{

	it('Renders without crashing', () => {
    	shallow(<AddNewHabitForm />);
	});
})
