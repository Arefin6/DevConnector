import React from 'react';

const ProfileHeader = ({portfolio}) => {
    return (
        <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img className="rounded-circle" src={portfolio.user.avatar} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{portfolio.user.name}</h1>
              <p className="lead text-center">{portfolio.status}</p>
              <p>{portfolio.location}</p>
              <p>
                <a className="text-white p-2" rel="noopener noreferrer" target="_blank" href={portfolio.website ? portfolio.website:'#'}>
                  <i className="fas fa-globe fa-2x"></i>
                </a>
                <a className="text-white p-2" rel="noopener noreferrer" target="_blank" href={portfolio.social.twitter ? portfolio.social.twitter:'#'}>
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a className="text-white p-2" rel="noopener noreferrer" target="_blank" href={portfolio.social.facebook ? portfolio.social.facebook:'#'}>
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a className="text-white p-2" rel="noopener noreferrer" target="_blank" href={portfolio.social.linkedin ? portfolio.social.linkedin:'#'}>
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a className="text-white p-2"  rel="noopener noreferrer"target="_blank" href={portfolio.social.instagram ? portfolio.social.instagram:'#'}>
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileHeader;