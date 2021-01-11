import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


const DashboardScreen = () => {
     
     const history = useHistory()
    const dispatch =  useDispatch()

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 
     
    if(!userInfo){
        history.push('/login')
    }


    return (
    
        <div>
            <h2>Dashboard</h2>
        </div>
    );
};

export default DashboardScreen;