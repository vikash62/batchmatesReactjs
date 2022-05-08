import React from 'react';
import { useState, useEffect } from 'react';

import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginHeader() {
	const history = useHistory()
	const url = "login"
	const [formvalues, setFormValues] = React.useState({
		password: '',
		email: '',
	});
	const [formErrors, setFormErrors] = React.useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	//   console.log("formvalues is ", formvalues);
	const handleChange = (event) => {
		setFormValues((fv) => {
			return { ...fv, [event.target.name]: event.target.value };
		});

		// console.log("event is ", event.target.value);
	};

	const handleSubmit = (event) => {
		//   console.log("event",event);
		event.preventDefault();
		setFormErrors(validate(formvalues));
		setIsSubmit(true);
		// console.log("formvalues is", formvalues);

		//submit these value in db
		const { password, email } = formvalues

		if (password && email) {
			// localStorage.setItem('Email', JSON.stringify(email));
			// localStorage.setItem('Password', JSON.stringify(password));
			Axios.post(url, formvalues)
				.then((response) => {
					if (response.data.result == false) {
						history.push('/login');
					} else {
						history.push('/');
					}

				});
		}
		// }

	}
	useEffect(() => {
		// console.log(formErrors)
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			//    console.log(formvalues);
		}
	}, [formErrors])
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.email) {
			errors.email = "Email is required";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		} else if (values.email === 'hfghhcgh.com') {

		} else {
			errors.email = "Incorrect Email or Password!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		return errors
	};
	return <div>

		<header>
			<div className="container">
				<div className="head-section login_sec">
					<form onSubmit={handleSubmit}>
						<div className="login-form">
							<div className="email-sec">
								<label>Email:</label>
								<input type="text" placeholder="Enter Email" name="email" value={formvalues.email} onChange={handleChange} />
								<span><i className="fa fa-user-o" aria-hidden="true"></i>

								</span>
								<p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.email}</p>
							</div>


							<div className="pwd-sec">
								<label>Password:</label>
								<input type="password" placeholder="Enter Password" name="password" value={formvalues.password} onChange={handleChange} required="" />
								<span><i className="fa fa-lock" aria-hidden="true" /><i /></span>
								<p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.password}</p>
							</div>


							<div className="btn-sec">
								<button type='submit'> Login</button>
							</div>

						</div>
					</form>


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

	</div>;
}

export default LoginHeader;
