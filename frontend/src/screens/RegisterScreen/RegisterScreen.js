import React, { useState } from 'react';

const RegisterScreen = () => {

     const [name,setName] =useState('');
     const [email,setEmail] =useState('');
     const [password,setPassword] =useState('');
     const [conPass,setConPass] =useState('');
     
     const handleSubmit = (e) =>{
         
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
                    <form onSubmit={handleSubmit} >
                        <div className="form-group my-3">
                        <input type="text" className="form-control form-control-lg" 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                        placeholder="Name" name="name" required />
                        </div>
                        <div className="form-group my-3">
                        <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                        </div>
                        <div className="form-group my-3">
                        <input type="password" className="form-control form-control-lg" placeholder="Password" name="password"
                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                        <div className="form-group my-3">
                        <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="conPassword" 
                         value={conPass}
                         onChange={(e) => setConPass(e.target.value)}
                        />
                        </div>
                        <input type="submit" className="btn btn-info text-white col-12 my-3" />
                    </form>
                    </div>
                </div>
                </div>
            </div>  

        </>
    );
};

export default RegisterScreen;