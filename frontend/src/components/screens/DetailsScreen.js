import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { profileDetailsAction } from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileCred from '../profile/ProfileCred';
import ProfileGithub from '../profile/ProfileGithub';
import ProfileHeader from '../profile/ProfileHeader';


const DetailsScreen = () => {
     
    const {userid} = useParams();
    const dispatch = useDispatch()
    
     const profileDetails = useSelector(state => state.profileDetails)
     const {loading,error,portfolio} = profileDetails
  
    useEffect(()=>{
       dispatch(profileDetailsAction(userid))
    },[dispatch,userid])


    return (
     <>
     {loading ? <Loader></Loader>: error ? <Message variant='danger'>{error}</Message>:(
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
   
            
             <ProfileHeader portfolio={portfolio}></ProfileHeader>
   
              <ProfileAbout portfolio={portfolio}></ProfileAbout>
             
              <ProfileCred portfolio={portfolio}></ProfileCred>
              {
               portfolio.githubUsername && <ProfileGithub userName={portfolio.githubUsername}></ProfileGithub>
              }
            
             
           </div>
         </div>
       </div>
     </div>
     
    )}  
     )   
     
    </>
    );
};

export default DetailsScreen;