import React from 'react';
import { Link } from "react-router-dom";
function Header() {
	return <div>


		<header className="chatroom">
			<div className="container">
				<div className="head-section">
					<div className="login-form">
						<div className="link-sec">
							<ul>
								<li><a href="#"><span><i className="fa fa-home" aria-hidden="true"></i></span> HOME </a></li>
								<li><a href="#">Batchmates</a></li>
								<li><Link to='/complete-profile' >Profile</Link></li>
								<li>
									<div className="btn-sec">
										<button><Link to='/login' onClick={() => localStorage.clear()}>LOGOUT</Link></button>
									</div>
								</li>
							</ul>
						</div>
					</div>

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

export default Header;
