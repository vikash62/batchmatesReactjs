import React from 'react';
import batchmates5 from '../images/batchmates-5.png';
import { useHistory } from "react-router-dom";
function ProDetail({ history }) {

  return <div>
     
    <section className="complate-profile">
    	<div className="container">
    		<div className="batchmates-sec batchmates-details-sec">

    			<div className="my_batchmates">
                   <div  className="back-arrow">
                       <a onClick={() => {
                history.push('/');
              }}><span><i className="fa fa-long-arrow-left" aria-hidden="true"></i></span></a>
                   </div>        

                   <div className="classmate-img_sec">
                       <img src={batchmates5} alt="classmate-img"/>
                   </div>

                   <div className="add-link">
                       <a href="#"><span><i className="fa fa-plus" aria-hidden="true"></i></span> ADD</a>
                   </div>

                   <div className="classmate-details">
                       <p className="name"> Akash Rana </p>
                       <p className="batch">Batch - 2000</p>
                       <p className="sch-collage">St. Karen's High School, Patna</p>
                       <p className="xc">X -C</p>
                       <p className="location">Current Location: Delhi</p>
                       <p className="work">Working As: Entrepreneur</p>
                       <p className="company">Company: E3 Software Services</p>
                   </div> 
                </div>

                <div className="batch-chatroom">
                    <div className="chat_sec">
                        <div className="date"><p>3/31/2021</p></div>
                        <div className="me">
                            <p>Me: Hi, How are  you? </p>
                        </div>
                        <div className="other-chat">
                            <p>Akash: I am fine.</p>
                        </div>
                        <div className="me">
                            <p>Me: Where are you these days?</p>
                        </div>
                        <div className="other-chat">
                            <p>Akash: I am in delhi. What about you? </p>
                        </div>
                    </div>
                    
                    <div className="input-sec">
                        <div className="type_sec">
                            <input type="type" name="" placeholder="Type a message"/>
                            <a href="#"><i className="fa fa-paperclip" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>

    		</div>
    	</div>
    </section> 

  </div>;
}

export default ProDetail;
