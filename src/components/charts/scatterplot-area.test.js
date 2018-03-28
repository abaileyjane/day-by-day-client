import React from 'react';
import {shallow, mount} from 'enzyme';

import {ScatterplotArea} from './scatterplot-area';

describe('<ScatterplotArea />', ()=>{

	it('Renders without crashing', () => {
    	shallow(<ScatterplotArea />);
	});
})
