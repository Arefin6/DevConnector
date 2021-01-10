import React, { useState } from 'react';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
     

    const loginHandler = (e)=>{
        e.preventDefault()
    }
    return (
    <>
    <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={loginHandler}>
            <div class="form-group my-3">
              <input type="email" 
               value={email} onChange={(e) => setEmail(e.target.value)}
              class="form-control form-control-lg" placeholder="Email Address" name="email" />
            </div>
            <div class="form-group my-3">
              <input type="password"  value={password} onChange={e => setPassword(e.target.value)} class="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <input type="submit" class="btn btn-info col-12 text-white mt-4" />
          </form>
        </div>
      </div>
    </div>
   </div>   
  </>
    );
};

export default Login;