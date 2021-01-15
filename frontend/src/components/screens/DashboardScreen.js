import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { currentProfile } from '../../actions/profileAction';
import DashboardEducation from '../dashboard/DashboardEducation';
import DashboardExperience from '../dashboard/DashboardExperience';
import Loader from '../Loader';


const DashboardScreen = () => {
     
     const history = useHistory()
    const dispatch =  useDispatch()

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 

    const profileCurrent = useSelector(state =>state.profileCurrent)
    const {loading,profile} = profileCurrent 
     
    
     useEffect(()=>{
      if(!userInfo){
        history.push('/login')
      }
         dispatch(currentProfile())
     },[dispatch,history,userInfo])

    return (
        <>
        {loading ? <Loader></Loader>:(
         
         !profile ?(
          <div>
            <h2>Dashboard</h2>
           <p>Welcome {userInfo.name} You Don't Hav e Profile Let's Start</p>
            <Link to="/createProfile" className="btn btn-info text-white">Create Profile</Link>
          </div>
      ):(
       <>
       <div className="dashboard">
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <h1 className="display-4">Dashboard</h1>
             <p className="lead text-muted">Welcome {userInfo.name}</p>
          
             <div className="btn-group mb-4" role="group">
               <Link to='/editProfile' className="btn btn-light">
                 <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</Link>
               <Link to="/addExperience" className="btn btn-light">
                 <i className="fab fa-black-tie text-info mr-1"></i>
                 Add Experience</Link>
               <Link to="/addEducation" className="btn btn-light">
                 <i className="fas fa-graduation-cap text-info mr-1"></i>
                 Add Education</Link>
             </div>

             <DashboardExperience profile={profile}></DashboardExperience> 

             <DashboardEducation portfolio={profile}></DashboardEducation> 
           </div>
         </div>
       </div>
     </div> 
     </>
     )  
        )}
        
        
    </>    
    );

};

export default DashboardScreen;