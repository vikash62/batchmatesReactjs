
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Popup from './popup/Popup';
function YearbatchmatesCategoryitem({ item }) {
    const [user, setUser] = useState("");


    useEffect(() => {
        getuser();
    }, [])
    const [buttonPopup, setButtonPopup] = useState(false);

    const getUser_url = "api/get-user-home"
    const getuser = () => {
        axios.post(getUser_url).then((response) => {
            console.log(response.data.result);
            setUser(response.data.result)

        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <div className='year_batch_sec'>

            <li id="our-class_mate">

                {user &&
                    user.map((item, index) => (

                        <div>
                            <Link to='/profile-detail'>
                                <img src={require('../images/' + item.image)} alt="batchmates-1" title={item.full_name} />
                            </Link>
                            <div className="name-add-sec">
                                <span>{item.full_name}</span>
                                <div className="add-sign class-mate">

                                    <a onClick={() => setButtonPopup(true)}>

                                        <span><i className="fa fa-plus" aria-hidden="false"></i> </span>
                                        Add
                                    </a>
                                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                        <h6>Are you Sure to send add request ?</h6>

                                    </Popup>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </li>

        </div>
    )
}

export default YearbatchmatesCategoryitem;
