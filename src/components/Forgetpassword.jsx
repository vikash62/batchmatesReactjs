import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Forgetpassword() {
  const [OTP, setOTP] = useState('');


  const history = useHistory()
  const url = "send-mail"
  const [formvalues, setFormValues] = React.useState({

    email: '',
  });
  const [formErrors, setFormErrors] = React.useState({});

  // console.log("formvalues is ", formvalues);
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
    console.log("formvalues are", formvalues);

    //submit these value in db
    const { email } = formvalues

    if (email) {

      Axios.post(url, formvalues)
        .then((response) => {
          // if (response.data.result == false) {
          //   history.push('/login');
          // }
          console.log(response);
        }).catch(err => {
          console.log(err.message);
        })
    }

  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors
  };


  const generateOTP = () => {
    console.log("vikash");
    //   const characters =
    //     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //   const characterCount = characters.length;
    //   let OTPvalue = '';
    //   for (let i = 0; i < length; i++) {
    //     OTPvalue += characters[Math.floor(Math.random() * characterCount)];
    //   }

    //   return OTPvalue;
    //   setOTP(OTPvalue);
  };
  return (


    <div className="forget-pwd-sec">

      <div className="row">

        <h1>{OTP}</h1>
        <h6 className="information-text">Enter your registered email to forget your password.</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="username">Email</label>
            <input type="text" placeholder="Enter Email" name="email" value={formvalues.email} onChange={handleChange} />
            <p style={{ color: "#a50b2e", marginTop: 10 }}>{formErrors.email}</p>
            <button >Reset Password</button>

          </div>
        </form>
        {/* 
        <button
          onPress={generateOTP} >otp</button> */}
        <div className="footer">

          <h5>New here? <Link to='/login'>Sign Up</Link></h5>
          <h5>Already have an account? <Link to='/login'>Sign In</Link></h5>

        </div>
      </div>
      <form />
    </div>

  )
}

export default Forgetpassword