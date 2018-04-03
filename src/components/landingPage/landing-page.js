import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../../auth';





import NavBar from '../navbar.js';
import Footer from '../footer.js';


export function LandingPage(props){
	return(
		<div className="landingpage">
			<header className="masthead text-center text-white">
      			<div className="masthead-content">
        			<div className="container">
          				<h1 className="masthead-heading mb-0">Day by Day</h1>
          				<h2 className="masthead-subheading mb-0">little habits, big changes</h2>
          				<a href="#information" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
        			</div>
      			</div>
		      <div className="bg-circle-1 bg-circle">
		      </div>
		      <div className="bg-circle-2 bg-circle">
		      </div>
		      <div className="bg-circle-3 bg-circle">
		      </div>
		      <div className="bg-circle-4 bg-circle">
		      </div>
		    </header>
		    <section id="information">
		      <div className="container">
		        <div className="row align-items-center">
		          <div className="col-sm-6 order-lg-2">
		            <div className="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/habits-signpost.jpg')} alt="stock image of signposts" />
		            </div>
		          </div>

		          <div className="col-sm-5 order-lg-1">
		            <div className="p-5 text">
		              <h2 className="display-4">Make a change and make it stick</h2>
		              <p>Forming a habit is hard. You start off strong, but soon you're slacking. Maintain your motivation with Day by Day, the habit forming app that tracks your progress towards solidifying a new habit.</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
		    <section>
		      <div className="container">
		        <div className="row align-items-center">
		          <div class="col-sm-6">
		            <div class="p-5 text">
		              <h2 class="display-4">Celebrate you streaks</h2>
		              <p>Day by Day displays clearly displays a calender showing which habits you completed on which days. Watch your streaks grow as your successes add up!</p>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/02.jpg')} alt="screenshot of chart" />
		            </div>
		          </div>
		          
		        </div>
		      </div>
		    </section>
		    <section>
		      <div className="container">
		        <div className="row align-items-center">
		          <div class="col-sm-6 order-lg-2">
		            <div class="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/logScreenShot.PNG')} alt="screenshot of daily log" />
		            </div>
		          </div>

		          <div className="col-sm-5 order-lg-1">
		            <div className="p-5 text">
		              <h2 className="display-4">Success in simplicity</h2>
		              <p>It is easy to record your daily successes. Day by Day saves the habits you're trying to form. Simply log on each day and check off the tasks you've completed. You'll love the satisfaction of a fully checked log!</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
		    <section className="text-center">
      			<div className="masthead-content">
        			<div className="container signupContainer">
          				<h2 className="masthead-subheading mb-0">Ready to start tracking?</h2>
          				<button onClick={()=>login()} className="btn btn-primary btn-xl rounded-pill mt-5">Sign Up</button>
        			</div>
      			</div>
		    </section>
    		<Footer />
		</div>
		)	
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage)