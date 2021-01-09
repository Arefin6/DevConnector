import React from 'react';

const HomeScreen = () => {
    return (
  <>
  <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Developer Connector
            </h1>
            <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>

            <a href="/register" className="btn btn-lg text-white btn-info mx-3">Sign Up</a>
            <a href="/login" className="btn btn-lg btn-light">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>   
 </>
    );
};

export default HomeScreen;