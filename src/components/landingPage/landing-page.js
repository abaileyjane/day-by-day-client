import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';




import NavBar from '../navbar.js';
import Footer from '../footer.js';


export function LandingPage(props){
console.log(props)
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
		      <div class="bg-circle-1 bg-circle">
		      </div>
		      <div class="bg-circle-2 bg-circle">
		      </div>
		      <div class="bg-circle-3 bg-circle">
		      </div>
		      <div class="bg-circle-4 bg-circle">
		      </div>
		    </header>
		    <section id="information">
		      <div class="container">
		        <div class="row align-items-center">
		          <div class="col-lg-6 order-lg-2">
		            <div class="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/habits-signpost.jpg')} alt="" />
		            </div>
		          </div>

		          <div className="col-lg-5 order-lg-1">
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
		          <div class="col-lg-6">
		            <div class="p-5 text">
		              <h2 class="display-4">Celebrate you streaks</h2>
		              <p>Day by Day displays clearly displays a calender showing which habits you completed on which days. Watch your streaks grow as your successes add up!</p>
		            </div>
		          </div>
		          <div className="col-lg-6">
		            <div className="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/02.jpg')} alt="" />
		            </div>
		          </div>
		          
		        </div>
		      </div>
		    </section>
		    <section>
		      <div className="container">
		        <div className="row align-items-center">
		          <div class="col-lg-6 order-lg-2">
		            <div class="p-5">
		              <img className="img-fluid rounded-circle" src={require('../../img/logScreenShot.PNG')} alt="" />
		            </div>
		          </div>

		          <div className="col-lg-5 order-lg-1">
		            <div className="p-5 text">
		              <h2 className="display-4">Success in simplicity</h2>
		              <p>It is easy to record your daily successes. Day by Day saves the habits you're trying to form. Simply log on each day and check off the tasks you've completed. You'll love the satisfaction of a fully checked log!</p>
		            </div>
		          </div>
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