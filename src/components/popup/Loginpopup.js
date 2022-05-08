import React, { useState } from 'react';

const Popup = (props) => {



  const [formvalues, setFormValues] = React.useState({
 
    pincode: ''
  
  });
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("formvalues iss ", formvalues);
  
  
  const handleChange = (event) => {
    console.log('event is', event.target.value);
    setFormValues((fv) => {
      return { ...fv, [event.target.name]: event.target.value };
    });
  
  };
  
  
 

  function close(){
    props.setTrigger(false)
  }

  const handleSubmitpin = (event) => {

		event.preventDefault();
		// setFormErrors(validate(formvalues));
		// setIsSubmit(true);
		// console.log("pincode is", event);


		//submit these value in db
		// const { pincode } = formvalues

		// if (pincode) {

		// 	Axios.post(url, formvalues)

		// }
	};
  
  function CallBoth(){
    close()
    handleSubmitpin()
  }
  return (props.trigger) ?(
    <form onSubmit={handleSubmitpin}>
    <div className='popup'>
     
        <div className='popup-inner'>
         
             <div className="sch-coll">
        
														<label>Enter Your School/College Area Pincode:</label>
														<input type="text" name="pincode" onChange={handleChange} value={formvalues.pincode} />
													</div>
                         
              <button className='close-btn pincode-submit'  onClick={CallBoth}  > Submit </button>
              {props.children}
           
        </div>
      
    </div>
    </form>
  ):"";
}

export default Popup