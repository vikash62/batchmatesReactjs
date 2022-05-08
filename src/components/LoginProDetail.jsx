import React from 'react';
import batchmates5 from '../images/batchmates-5.png';
import { useHistory } from "react-router-dom";
function LoginProDetail({ history }) {

    return <div>

        <section className="complate-profile">
            <div className="container">
                <div className="batchmates-sec batchmates-details-sec">

                    <div className="my_batchmates">
                        <div className="back-arrow">
                            <a onClick={() => {
                                history.push('/login');
                            }}><span><i className="fa fa-long-arrow-left" aria-hidden="true"></i></span></a>
                        </div>

                        <div className="classmate-img_sec">
                            <img src={batchmates5} alt="classmate-img" />

                        </div>

                        <div className="add-link">
                            <a onClick={() => {
                                history.push('/login');
                            }}><span><i className="fa fa-plus" aria-hidden="true"></i></span> ADD</a>
                        </div>



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
            </div>
        </section>

    </div>;
}

export default LoginProDetail;
