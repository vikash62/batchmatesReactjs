import React, { useState, useEffect } from 'react';
import LoginHeader from './LoginHeader';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Popup from './popup/Loginpopup';

import axios from 'axios';

const Register = (history) => {
	const [user, setUser] = useState("");


	const [buttonPopup, setButtonPopup] = useState(false);


	useEffect(() => {
		getuser();
	}, [])


	useEffect(() => {
		setButtonPopup(true);
	}, [])




	const getUser_url = "api/get-user-home"
	const url = "save-user"
	const [formvalues, setFormValues] = React.useState({
		full_name: '',
		school_collage: '',
		password: '',
		email: '',
		batch_year: '',
		city: '',
		state: '',
		pincode: ''

	});
	const [formErrors, setFormErrors] = React.useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	console.log("formvalues is ", formvalues);
	const handleChange = (event) => {
		console.log('event is', event.target.value);
		setFormValues((fv) => {
			return { ...fv, [event.target.name]: event.target.value };
		});

	};
	const handleSubmit = (event) => {

		event.preventDefault();
		setFormErrors(validate(formvalues));
		setIsSubmit(true);
		//submit these value in db
		const { full_name, school_collage, password, email, batch_year, city, state } = formvalues

		if (full_name && school_collage && password && email && batch_year && city && state) {

			Axios.post(url, formvalues)

		}
	};

	const handleSubmitpin = (event) => {

		event.preventDefault();
		// setFormErrors(validate(formvalues));
		// setIsSubmit(true);
		console.log("pincode is", event);


		//submit these value in db
		// const { pincode } = formvalues

		// if (pincode) {

		// 	Axios.post(url, formvalues)

		// }
	};



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
			errors.password = "Password should be more than 4 characters";
		} else if (values.password.length > 10) {
			errors.password = "Password should not exceed 10 characters";
		} if (!values.full_name) {
			errors.full_name = "Full Name is required";
		}
		if (!values.school_collage) {
			errors.school_collage = "School/College  name is required";
		}
		if (!values.batch_year) {
			errors.batch_year = "Batch Year  is required";
		}
		if (!values.city) {
			errors.city = "City is required";
		}
		if (!values.state) {
			errors.state = "State is required";
		}
		return errors
	};
	const getuser = () => {
		axios.post(getUser_url).then((response) => {
			console.log(response.data.result);
			setUser(response.data.result)

		}).catch(err => {
			console.log(err);
		})
	}

	return (
		<>
			<div>
				<div>
					<LoginHeader />


					<section>
						<div className="container">
							<div className="batchmates-sec">
								<div className="img-sec">
									<Link to='/user-Detail'>
										<div className="one-img">


											<ul>



												{user &&
													user.map((item, index) => (

														<li style={{ paddingTop: 15 }}><a href="#"><img src={require('../images/' + item.image)} alt="batchmates-1" title={item.image} /></a></li>
													))
												}
											</ul>
										</div>
									</Link>

									<div className="link_sec">
										<a href="#"><div style={{ textAlign: "center", color: "#a50b2e", fontStyle: "bold", fontSize: 20 }}>Invite Your Batchmates</div></a>
									</div>
								</div>

								<div className="detail-form-sec">
									<h2>REGISTER NOW</h2>
									{/* <button onClick={getuser}>viaksh</button> */}
									<form onSubmit={handleSubmit}>
										<div className="name">
											<label>Full name:</label>
											<input type="text" name="full_name" value={formvalues.full_name} onChange={handleChange} />

										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.full_name}</p>
										<div className="sch-coll">
											<label>School/College Name:</label>
											<input type="text" name="school_collage" value={formvalues.school_collage} onChange={handleChange} />
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.school_collage}</p>
										<div className="batch-year">
											<label>Batch Year:</label>
											<select name="batch_year" id="batch_year" value={formvalues.batch_year} onChange={handleChange}>
												<option value="">please select</option>
												<option value="2000">2000</option>
												<option value="2001">2001</option>
												<option value="2002">2002</option>
												<option value="2003">2003</option>
											</select>
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.batch_year}</p>
										<div className="city-sec">
											<label>Which City?</label>
											<select name="city" id="city" value={formvalues.city} onChange={handleChange}>
												<option value="">please select</option>
												<option value="Delhi">Delhi</option>
												<option value="Mumbai">Mumbai</option>
												<option value="Chennai">Chennai</option>
												<option value="Hydrabad">Hydrabad</option>
											</select>
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.city}</p>
										<div className="state-sec">
											<label>State:</label>
											<select name="state" id="state" value={formvalues.state} onChange={handleChange}>
												<option value="">please select</option>
												<option value="Delhi">Delhi</option>
												<option value="Mumbai">Mumbai</option>
												<option value="Chennai">Chennai</option>
												<option value="Hydrabad">Hydrabad</option>
											</select>
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.state}</p>
										<div className="email-sec">
											<label>Email:</label>
											<input type="text" name="email" value={formvalues.email} onChange={handleChange} placeholder="This will be your Login Email " />
											<span><i className="fa fa-user-o" aria-hidden="true"></i></span>
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.email}</p>
										<div className="pwd-sec">
											<label>Password:</label>
											<input type="password" required="" name="password" value={formvalues.password} onChange={handleChange} />
											<span><i className="fa fa-lock" aria-hidden="true"></i></span>
										</div>
										<p style={{ color: "#a50b2e" }}>{formErrors.password}</p>
										<div className="btn-sec">
											<button type='submit'>submit</button>
										</div>

										<div className="add-sign class-mate">

											<a onClick={() => setButtonPopup(true)}>
											</a>
											<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

											</Popup>
										</div>

									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Register