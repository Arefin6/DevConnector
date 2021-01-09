import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { allProfiles } from '../../actions/profileAction';
import ProfileDetails from '../profileDetails';
import Message from '../Message';
import Loader from '../Loader';



const ProfileScreen = () => {

    const dispatch = useDispatch()

    const profilesAll = useSelector(state => state.profilesAll)
    const{error,loading,profiles} = profilesAll
    
    useEffect(()=>{
       dispatch(allProfiles())         
    },[dispatch])

    return (
        <>
          <div className="profiles">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="display-4 text-center">Developer Profiles</h1>
                <p className="lead text-center">Browse and connect with developers</p>
                 
               {loading && <Loader></Loader>}  

              {error ? <Message>{error}</Message>
              :(
                profiles.map(profile => (
                    <div key={profile._id}>
                        <ProfileDetails  profile={profile} ></ProfileDetails>
                    </div> 
                  
                ))
              )  
            
            } 
                
                </div>
            </div>
            </div>
        </div>  
        </>
    );
};

export default ProfileScreen;