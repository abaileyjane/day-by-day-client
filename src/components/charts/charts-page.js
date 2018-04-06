import React from 'react';
import {connect} from 'react-redux';
import '../../one-page-wonder.css'
import {isLoggedIn} from '../../auth';
import { fetchUser} from '../../actions'

import ScatterplotArea from './scatterplot-area.js'

export class ChartsPage extends React.Component{


componentDidMount(){
	console.log('componenetDidMount')
	this.props.dispatch(fetchUser())
}

render(){
return (<div>
{(isLoggedIn()) && (
	<header className="masthead text-center homepage">
      	<div className="masthead-content-auth">
        	<div className="container">
          		<h1 className="masthead-heading mb-0 chartheading">My Progress</h1>
          		<div className="chart-container">
					<div className="ChartsPage">
						<ScatterplotArea />
					</div>
				</div>
			</div>
		</div>
	</header>
)

}
</div>
)}
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(ChartsPage)