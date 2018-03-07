import React from 'react';
import {connect} from 'react-redux';



import NavBarLoggedIn from '../navbar-logged-in.js';
import ScatterplotArea from './scatterplot-area.js'

export function ChartsPage(props){

return(
	<div className="ChartsPage">
		<NavBarLoggedIn firstName={props.firstName} />
		{' '}
		<ScatterplotArea />
	</div>
	)
	
}

const mapStateToProps = (state) => (
	
	{
	firstName: state.firstName,
	date: state.selectedDate}
	)

export default connect(mapStateToProps)(ChartsPage)