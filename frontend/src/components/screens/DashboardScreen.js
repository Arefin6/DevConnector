import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { currentProfile } from '../../actions/profileAction';


const DashboardScreen = () => {
     
     const history = useHistory()
    const dispatch =  useDispatch()

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 

    const profileCurrent = useSelector(state =>state.profileCurrent)
    const {loading,error,profile} = profileCurrent 
     
    if(!userInfo){
        history.push('/login')
    }
     useEffect(()=>{
         dispatch(currentProfile())
     },[dispatch])

    return (
        <>
        {
          !profile ?(
               <div>
                 <h2>Dashboard</h2>
                <p>Welcome {userInfo.name} You Don't Hav e Profile Let's Start</p>
                 <Link to="/createProfile" className="btn btn-info text-white">Create Profile</Link>
               </div>
          ):(
            <div>
            <h2>Dashboard</h2>
        </div>
          )  
        }
    </>    
    );

};

export default DashboardScreen;