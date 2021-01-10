import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={`/profile/${profile.user._id}`} className="btn text-white btn-info">View Profile</Link>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <h4>Skill Set</h4>
                        <ul className="list-group">
                         {profile.skills.map((skill,index)=> (
                           <li className="list-group-item" key={index}>
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