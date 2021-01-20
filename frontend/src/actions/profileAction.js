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
    PROFILE_CREATE_FAIL,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_REQUEST,
    PROFILE_ADD_EXPERIENCE_REQUEST,
    PROFILE_ADD_EXPERIENCE_FAIL,
    PROFILE_ADD_EXPERIENCE_SUCCESS,
    PROFILE_ADD_EDUCATION_REQUEST,
    PROFILE_ADD_EDUCATION_SUCCESS,
    PROFILE_ADD_EDUCATION_FAIL,
    PROFILE_DELETE_EDUCATION_REQUEST,
    PROFILE_DELETE_EDUCATION_SUCCESS,
    PROFILE_DELETE_EDUCATION_FAIL,
    PROFILE_DELETE_EXPERIENCE_REQUEST,
    PROFILE_DELETE_EXPERIENCE_SUCCESS,
    PROFILE_DELETE_EXPERIENCE_FAIL
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

   export const profileUpdateAction = (formData) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_UPDATE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/profile`,
        formData,
        config)
         dispatch({
             type:PROFILE_UPDATE_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }  


   export const addExpAction = (formData) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_ADD_EXPERIENCE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/profile/addExperience`,
        formData,
        config)
         dispatch({
             type:PROFILE_ADD_EXPERIENCE_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_ADD_EXPERIENCE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }  
  


   export const addEduAction = (formData) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_ADD_EDUCATION_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/profile/addEducation`,
        formData,
        config)
         dispatch({
             type:PROFILE_ADD_EDUCATION_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_ADD_EDUCATION_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }  
    
   export const deleteEducation = (edu_id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_DELETE_EDUCATION_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }

        const data = await axios.post(`/api/profile/${edu_id}/delete`,
        {},config)

         dispatch({
             type:PROFILE_DELETE_EDUCATION_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_DELETE_EDUCATION_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }  


   export const deleteExperience = (exp_id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: PROFILE_DELETE_EXPERIENCE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
       

        const data = await axios.post(`/api/profile/${exp_id}/delete`,
        {},config)

         dispatch({
             type:PROFILE_DELETE_EXPERIENCE_SUCCESS,
             payload:data
         })
       } catch (error) {
        
        dispatch({
            type:PROFILE_DELETE_EXPERIENCE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   }    
     
