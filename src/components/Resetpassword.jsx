import React from 'react'
import { Link } from "react-router-dom";

const Resetpassword = () => {

  const [formvalues, setFormValues] = React.useState({

    email: '',
    password: '',
    cnfrmpassword: ''
  });
  const [formErrors, setFormErrors] = React.useState({});

  console.log("formvalues is ", formvalues);
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
    // setIsSubmit(true);
    console.log("formvalues ares", formvalues);

    //submit these value in db


  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password should be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password should not exceed 10 characters";
    }
    if (values.password !== values.cnfrmpassword) {
      errors.cnfrmpassword = "Confirm password should be match with password";
    }

    return errors

  };


  return (
    <div>

      <div class="reset-pwd-page">
        <div class="form">
          <h1>Reset Password</h1>
          <h6 class="information-text">Enter your registered email to reset your password.</h6>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please Enter OTP" name="email" value={formvalues.email} onChange={handleChange} />
            <p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.email}</p>
            <input type="password" placeholder="Enter New password" name="" value={formvalues.password} onChange={handleChange} required="" />
            <p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.password}</p>
            <input type="password" placeholder="Enter confirm New password" name="cnfrmpassword" value={formvalues.cnfrmpassword} onChange={handleChange} required="" />
            <p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.cnfrmpassword}</p>


            <button>create</button>
            <p class="message">Already registered? 	<Link to='/login'>Sign in</Link> </p>
          </form>

        </div>
      </div>




    </div>
  )
}

export default Resetpassword