import React, { useState } from 'react';

const Register = () => {
 
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [conPassword,setConPassword] = useState('')
    const [message,setMessage] = useState('')
     

    const registerHandler = (e)=>{
     e.preventDefault()
    } 

   

    return (
   <>
   <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form onSubmit={registerHandler}>
            <div className="form-group my-3">
              <input  
                value={name} onChange={(e) => setName(e.target.value)}
              type="text" className="form-control form-control-lg" placeholder="Name" name="name" required />
            </div>
            <div className="form-group my-3">
              <input type="email"
                   value={email} onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg" placeholder="Email Address" name="email" />
              <small classNameName="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group my-3">
              <input type="password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <div className="form-group my-3">
              <input type="password"
                  value={conPassword} onChange={(e) => setConPassword(e.target.value)}
              className="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
            </div>
            <input type="submit" className="btn btn-info col-12 text-white mt-4" />
          </form>
        </div>
      </div>
    </div>
   </div>  
  </>
    );
};

export default Register;