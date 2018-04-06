import React from 'react';
import {shallow, mount} from 'enzyme';

import {ChartsPage} from './charts-page';
import {ScatterplotArea} from './scatterplot-area';


describe('<ChartsPage />', ()=>{
	beforeAll(() => {
    const ls = require("../../auth-localStorage.js");
    ls.setLocalStorage();
});

	it('Renders without crashing', () => {
		const dispatch = jest.fn();

    	shallow(<ChartsPage dispatch={dispatch} />);
	});
})
