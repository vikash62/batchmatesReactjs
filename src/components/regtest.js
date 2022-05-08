import React, { useState,useEffect } from 'react';
import LoginHeader from './LoginHeader';
import { Link } from "react-router-dom";
import  Axios  from 'axios';
import batchmates1 from '../images/batchmates-1.png';
import batchmates2 from '../images/batchmates-2.png';
import batchmates3 from '../images/batchmates-3.png';
import batchmates4 from '../images/batchmates-4.png';



function Register({history}) {
     const url = "save-user"
	const [formvalues ,setFormValues] = React.useState({
		full_name: '',
	  school_collage:'',
	  password:'',
	  email:'',
	  batch_year:'',
	  city:'',
	  state:''
	  
	});
	const [formErrors ,setFormErrors] = React.useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	// console.log("formvalues is ", formvalues);
	const handleChange=(event)=>{
		setFormValues((fv)=>{
			return{ ...fv, [event.target.name]:event.target.value};
		});
	
	};
	 const handleSubmit = (event) => {
	
		event.preventDefault();
		setFormErrors(validate(formvalues));
		setIsSubmit(true);
		// console.log("formvalues is ", formvalues);

		//submit these value in db
		Axios.post(url,{
			full_name: formvalues.full_name,
			school_collage: formvalues.school_collage,
			password: formvalues.password,
			email: formvalues.email,
			batch_year: formvalues.batch_year,
			city: formvalues.city,
			state: formvalues.state,
		})
       .then((response)=>{
           console.log(response);
	   });
	};

	// useEffect(()=>{
	// 	// console.log(formErrors)
    //    if(Object.keys(formErrors).length === 0 && isSubmit){
	// 	//    console.log(formvalues);
	//    }
	// },[formErrors])

	
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		
		if (!values.email) {
		  errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
		  errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		  } else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		  } else if (values.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		  } if(!values.full_name){
			errors.full_name = "username is required";
		}
		if(!values.school_collage){
			errors.school_collage = "school/Collage name is required";
		}
		return errors
	};

  return <div>
      <LoginHeader/>
    <section>
    	<div className="container">
    		<div className="batchmates-sec">
    			<div className="img-sec">
    				<div className="one-img">
    					<ul>
    						<li><a href="#"><img src={batchmates1} alt="batchmates-1"/></a></li>
    						<li><a href="#"><img src={batchmates2} alt="batchmates-2"/></a></li>
    						<li><a href="#"><img src={batchmates1} alt="batchmates-3"/></a></li>
    					</ul>
    				</div>
    				<div className="second-img">
    					<ul>
    						<li><a href="#"><img src={batchmates4} alt="batchmates-4"/></a></li>
    						<li><a href="#"><img src={batchmates3} alt="batchmates-5"/></a></li>
    					</ul>
    				</div>
    				<div className="thard-img">
    					<ul>
    						<li><a href="#"><img src={batchmates2} alt="batchmates-6"/></a></li>
    						<li><a href="#"><img src={batchmates1} alt="batchmates-7"/></a></li>
    						<li><a href="#"><img src={batchmates2} alt="batchmates-8"/></a></li>
    					</ul>
    				</div>

    				<div className="link_sec">
    					<a href="#">Invite Your Batchmates</a>
    				</div>
    			</div>

    			<div className="detail-form-sec">
    				<h2>REGISTER NOW</h2>

    				<form onSubmit={handleSubmit}>
    					<div className="name">
    						<label>Full name:</label>
    						<input type="text" name="full_name" value={formvalues.full_name} onChange={handleChange}/>
						
    					</div>
						<p>{formErrors.full_name}</p>
                        <div className="sch-coll">
                        	<label>School/College Name:</label>
    						<input type="text" name="school_collage"  value={formvalues.school_collage} onChange={handleChange}/>
                        </div>
						<p>{formErrors.school_collage}</p>
    					<div className="batch-year">
    						<label>Batch Year:</label>
    						<select name="batch_year" id="batch_year" value={formvalues.batch_year} onChange={handleChange}>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
    					</div>
    					<div className="city-sec">
    						<label>Which City?</label>
    						<select name="city" id="city" value={formvalues.city} onChange={handleChange}>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
    					</div>
    					<div className="state-sec">
    						<label>State:</label>
    						<select name="state" id="state" value={formvalues.state} onChange={handleChange}>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hydrabad">Hydrabad</option>
                            </select>
    					</div>
    					
    					<div className="email-sec">
    						<label>Email:</label>
    						<input type="text"  name="email" value={formvalues.email} onChange={handleChange}/>
    						<span><i className="fa fa-user-o" aria-hidden="true"></i></span>
    					</div>
						<p>{formErrors.email}</p>
    					<div className="pwd-sec">
    						<label>Password:</label>
    						<input type="password" required="" name="password" value={formvalues.password} onChange={handleChange}/>
    						<span><i className="fa fa-lock" aria-hidden="true"></i></span>
    					</div>
						<p>{formErrors.password}</p>
    					<div className="btn-sec">
                            <button type='submit'>submit</button>
	     				</div>
    				</form>
    			</div>
    		</div>
    	</div>
    </section> 
  </div>;
}

export default Register;
