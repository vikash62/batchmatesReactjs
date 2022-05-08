import React, { useState } from 'react';
import Header from '../components/Header';
import { popularProducts } from '../data'
import YearbatchmatesCategoryitem from '../components/YearbatchmatesCategoryitem';


const Home = () => {
    const [filter, setFilters] = useState("2010 CHATROOM");

    return <div>

        <Header />
        <section className="complate-profile">
            <div className="container">
                <div className="batchmates-sec batch_chat_sec">

                    <div className="my_batchmates">
                        <h2>{filter} </h2>


                        <ul>
                            <li className='image_style'>
                                {popularProducts.map((item) => (
                                    <YearbatchmatesCategoryitem item={item} key={item.id} />
                                ))}

                            </li>

                        </ul>

                        <div className="select_sec">
                            <select name="batch_year" id="batch-year" onChange={(e) => {
                                const selectedYear = e.target.value;
                                setFilters(selectedYear);
                            }}>
                                <option value=" PLEASE SELECT BATCH">SELECT BATCH</option>
                                <option value="2010 CHATROOM">2010</option>
                                <option value="2011 CHATROOM">2011</option>
                                <option value="2012 CHATROOM">2012</option>
                                <option value="2013 CHATROOM">2013</option>
                            </select>
                        </div>
                    </div>

                    <div className="batch-chatroom">
                        <h3>BATCHMATES Chatroom</h3>
                        <div className="blanck"></div>
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
                            </div><div className="me">
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
                            </div><div className="me">
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
                            </div><div className="me">
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
                            </div><div className="me">
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
                                <input type="type" name="" placeholder="Type a message" />
                                <a href="#"><i className="fa fa-paperclip" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>;
};

export default Home;
