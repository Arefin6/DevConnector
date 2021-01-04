import React from 'react';
import { Button } from 'react-bootstrap';

const LoginScreen = () => {
    return (

  <>
    <div className="login">
        <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your DevConnector account</p>
            <form>
                <div className="form-group my-3">
                <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                </div>
                <div className="form-group">
                <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                </div>
                <div className="form-group">
                <Button type="submit" variant="info" className="my-3 col-12 text-white">Submit</Button>
                </div>
          
            </form>
            </div>
        </div>
        </div>
    </div>   
 </>
    );
};

export default LoginScreen;