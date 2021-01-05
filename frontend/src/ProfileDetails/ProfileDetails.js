import React from 'react';

const ProfileDetails = ({profile}) => {
    return (
        <>
           <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" src={profile.user.avatar} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{profile.user.name}</h3>
                        <p>{profile.status}</p>
                        <p>{profile.location}</p>
                        <a href="profile.html" className="btn text-white btn-info">View Profile</a>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <h4>Skill Set</h4>
                        <ul className="list-group">
                         {profile.skills.map(skill=> (
                           <li className="list-group-item">
                           <i className="fa fa-check pr-1"></i>{skill}</li>
                         ))
                         }   
                      
                       
                        </ul>
                    </div>
                    </div>
                </div>   
        </>
    );
};

export default ProfileDetails;