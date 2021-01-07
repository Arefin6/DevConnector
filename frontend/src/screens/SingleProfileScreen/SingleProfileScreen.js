import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { profileDetailsAction } from '../../actions/profileAction';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';


const SingleProfileScreen = () => {
  
  const {slug} = useParams()
  
  const dispatch =useDispatch()

  const profileDetails = useSelector(state => state.profileDetails)
  const {loading,error,profile} = profileDetails

  useEffect(()=>{

  if(profile.slug && profile.slug === slug){
    dispatch(profileDetailsAction(slug))
  }
  else{
     <Message>"Not Found"</Message>
  }
  
  },[slug,dispatch])
   

  return (
    <> 
       {loading && <Loader></Loader>}
       {error ? <Message>{error}</Message>:(
          <div className="profile">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/profiles" className="btn btn-light mb-3 float-left">Back To Profiles</Link>
                    </div>
                    <div className="col-6">
        
                    </div>
                  </div>
        
                 
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-body bg-info text-white mb-3">
                        <div className="row">
                          <div className="col-4 col-md-3 m-auto">
                            <img className="rounded-circle" src={profile.user.avatar} alt="" />
                          </div>
                        </div>
                        <div className="text-center">
                          <h1 className="display-4 text-center">{profile.user.name}</h1>
                          <p className="lead text-center">{profile.status}</p>
                          <p>{profile.location}</p>
                          <p>
                            <a className="text-white p-2" target="_blank" href={profile.website ? profile.website:'#'}>
                              <i className="fas fa-globe fa-2x"></i>
                            </a>
                            <a className="text-white p-2" target="_blank" href={profile.social.twitter ? profile.social.twitter:'#'}>
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a className="text-white p-2" target="_blank" href={profile.social.facebook ? profile.social.facebook:'#'}>
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a className="text-white p-2" target="_blank" href={profile.social.likendin ? profile.likendin:'#'}>
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a className="text-white p-2" target="_blank" href={profile.social.instagram ? profile.social.instagram:'#'}>
                              <i className="fab fa-instagram fa-2x"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
        
                 
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-body bg-light mb-3">
                        <h3 className="text-center text-info">{profile.user.name}'s Bio</h3>
                        <p className="lead">
                          {
                           profile.bio
                          }
                        </p>
                        <hr />
                        <h3 className="text-center text-info">Skill Set</h3>
                        <div className="row">
                          <div className="d-flex flex-wrap justify-content-center align-items-center">
                            {profile.skills.map(skill =>(
                               <div className="p-3">
                               <i className="fa fa-check"></i>{skill}</div>
                            ))}
                          
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
               
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="text-center text-info">Experience</h3>
                      <ul className="list-group">
                        {
                         profile.experience.length>0 ? (
                           profile.experience.map(exp =>(
                           <li className="list-group-item">
                          <h4>{exp.company}</h4>
                          <p>{exp.from} - {exp.current ? "Current" : exp.to}</p>
                        
                          <p>
                            <strong>Description:</strong>{exp.description}</p>
                        </li>
                           ))
                         ) :(
                          <h4>This User Have No experience yet</h4>  
                         )
                           
                        }
                        
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-center text-info">Education</h3>
                      <ul className="list-group">
                       
                          {
                           profile.education.length>0 ?
                           (
                            profile.education.map(edu =>(
                               
                              <li className="list-group-item">
                              <h4>{edu.school}</h4>
                              <p>{edu.from} - {edu.current ? 'current' : edu.to}</p>
                              <p>
                                <strong>Degree: </strong>{edu.degree}</p>
                              <p>
                                <strong>Field Of Study: </strong>{edu.fieldofstudy}</p>
                              <p> 
                                  <strong>Description:</strong>{edu.description}</p>
                            </li>
                            
                            )) 
                    
                           ):(
                            <h4>This Profile Has No Education yet</h4>
                           ) 
                          }
                          

                          
                      </ul>
                    </div>
                  </div>
        
                  <div >
                    <hr />
                    <h3 className="mb-4">Latest Github Repos</h3>
                    <div  className="card card-body mb-2">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>
                            <Link  className="text-info" target="_blank"> Repository One
                            </Link>
                          </h4>
                          <p>Repository description</p>
                        </div>
                        <div className="col-md-6">
                          <span className="badge badge-info mr-1">
                            Stars: 44
                          </span>
                          <span className="badge badge-secondary mr-1">
                            Watchers: 21
                          </span>
                          <span className="badge badge-success">
                            Forks: 122
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
       )}
     
    </>
  );
};

export default SingleProfileScreen;