import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import profileDetail from './components/ProDetail'
import login from './components/Register'
// import Register from './Register'
import completeprofile from './components/CompletePro'

import LoginProDetail from './components/LoginProDetail';
import Forgetpassword from './components/Forgetpassword'
import resetpassword from './components/Resetpassword'
// import Product from './Product'


const Routing = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/profile-Detail" component={profileDetail} />
          <Route path="/user-Detail" component={LoginProDetail} />
          <Route path="/forgot" exact component={Forgetpassword} />
          <Route path="/reset" exact component={resetpassword} />
          <Route path="/login" exact component={login} />
          <Route path="/complete-profile" component={completeprofile} />

          {/* <Route path="/Login">
           { 
             user ? <Redirect to="/"/>:<Login/>}
           </Route>
           <Route path="/Register">
           {
             user ? <Redirect to="/"/>:<Register/>}
           </Route>
           <Route path="/Forgot">
           {
             user ? <Redirect to="/"/>:<Forgot/>}
           </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routing
