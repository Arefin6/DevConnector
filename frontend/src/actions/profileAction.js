import axios from 'axios';
import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
    PROFILE_CURRENT_FAIL,
    PROFILE_CURRENT_REQUEST,
    PROFILE_CURRENT_SUCCESS,
    PROFILE_CREATE_REQUEST,
    PROFILE_CREATE_SUCCESS,
    PROFILE_CREATE_FAIL
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

   export const currentProfile = () =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_CURRENT_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/profile`,config)
       
         dispatch({
             type:PROFILE_CURRENT_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_CURRENT_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   } 


   export const createProfileAction = (formData) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_CREATE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/profile`,
        formData,
        config)
         dispatch({
             type:PROFILE_CREATE_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }  