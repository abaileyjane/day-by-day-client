import React from 'react';
import {connect} from 'react-redux';
import '../../one-page-wonder.css'



import Auth from '../../auth'
import NavBar from '../navbar.js';
import ScatterplotArea from './scatterplot-area.js'

const auth = new Auth();
export function ChartsPage(props){


	const { isAuthenticated } = props.auth;
return (<div>
{isAuthenticated() && (


	<div className="ChartsPage">
		<NavBar auth={auth} />
		<div className="header">
			<h1>My Progress</h1>
		</div>
		<ScatterplotArea />
	</div>
	
	
)}
{(!isAuthenticated()) && (
	<div className="ChartsPage">
		<NavBar auth={auth} />
		<ScatterplotArea />
	</div>
)

}
</div>
)}
const mapStateToProps = (state) => (
	
	{
	firstName: state.firstName,
	date: state.selectedDate}
	)

export default connect(mapStateToProps)(ChartsPage)