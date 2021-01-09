import axios from 'axios';
import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL
} from '../constants/profileConstants';

export const allProfiles = () => async(dispatch)=>{
    try {
       dispatch({type:PROFILE_REQUEST})
       
       const {data} = await axios.get('/api/profile/all')

       dispatch({
           type:PROFILE_SUCCESS,
           payload:data
       })

    } catch (error) {
         dispatch({
             type:PROFILE_FAIL,
             payload:error.response && error.response.data.message
             ? error.response.data.message
             : error.message, 
         })      
    }
}


export const profileDetailsAction = (id) =>async(dispatch)=>{
    try {
         
        dispatch({type: PROFILE_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/profile/${id}`)
       
         dispatch({
             type:PROFILE_DETAILS_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   } 