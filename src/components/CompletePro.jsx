import React from 'react';
import { Link } from "react-router-dom";

function CompletePro() {
  return <div>

<header>
     	<div className="container">
     		<div className="head-section">
     			<div className="login-form">
     				<div className="login-link">
                        <h3>Welcome - lorem ipsum</h3>           
                    </div>
     			</div>

     			<div className="social-icon">
     				<ul>
     					<li className="fb"><a href="#"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
     					<li className="tw"><a href="#"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></a></li>
     					<li className="insta"><a href="#"><span><i className="fa fa-instagram" aria-hidden="true"></i></span></a></li>
     				</ul>
     			</div>
     		</div>
     	</div>
     </header>
    
    <section className="complate-profile">
    	<div className="container">
    		<div className="batchmates-sec">

    			<div className="detail-form-sec complate-profile-sec">
    				<h2>Complete Profile</h2>

    				<form>
    					<div className="name">
    						<label>Full name:</label>
    						<input type="text" name=""/>
    					</div>
                        <div className="sch-coll">
                        	<label>School/College Name:</label>
    						<input type="text" name=""/>
                        </div>
    					<div className="batch-year">
    						<label>Batch Year:</label>
    						<select name="batch-year" id="batch-year">
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
    					</div>
    					<div className="city-sec">
    						<label>Which City?</label>
    						<select name="city" id="city">
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
    					</div>
    					<div className="state-sec">
    						<label>State:</label>
    						<select name="state" id="state">
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
    					</div>
    					<div className="upload-sec">
    						<label>Upload Picture:</label>
    						<ul>
			    				<li>
			    					<button className="browser">Upload Picture</button>
			    				</li>
			    			</ul>
    					</div>
    					<div className="email-sec">
    						<label>Email:</label>
    						<input type="text" name=""/>
    						<span><i className="fa fa-user-o" aria-hidden="true"></i></span>
    					</div>
    					<div className="pwd-sec">
    						<label>Password:</label>
    						<input type="password" name="psw" required=""/>
    						<span><i className="fa fa-lock" aria-hidden="true"></i></span>
    					</div>

                        <div className="currner-city">
                            <label>Current City:</label>
                            <select name="city" id="city">
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
                        </div>
                        <div className="currner-state">
                            <label>Current State:</label>
                            <select name="state" id="state">
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
                        </div>
                        <div className="country">
                            <label>Country:</label>
                            <select name="country" id="country">
                                <option value="Delhi">India</option>
                                <option value="Mumbai">Pakistan</option>
                                <option value="Chennai">Sri lanka</option>
                                <option value="Hydrabad">Nepal</option>
                            </select>
                        </div>
                        <div className="profession">
                            <label>Profession:</label>
                            <input type="text" name=""/>
                        </div>
                        <div className="company-name">
                            <label>Company Name:</label>
                            <input type="text" name=""/>
                        </div>
                        <div className="job-position">
                            <label>Job Position:</label>
                            <input type="text" name=""/>
                        </div>

    					<div className="btn-sec">
                         
                                <button><Link to='/'>submit</Link></button>
                        
	     					
	     				</div>

                        <div className="next-arrow">
                            <a href="mybatchmates.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
    				</form>
    			</div>
    		</div>
    	</div>
    </section> 
   

  </div>;
}

export default CompletePro;
