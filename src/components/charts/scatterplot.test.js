import React from 'react';
import {shallow, mount} from 'enzyme';

import {Scatterplot} from './scatterplot';

describe('<Scatterplot/>', ()=>{

	it('Renders without crashing', () => {
    	shallow(<Scatterplot />);
	});
})
