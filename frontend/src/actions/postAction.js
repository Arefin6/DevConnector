import axios from 'axios'
import {ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS}from '../constants/postConstants'

export const addPost = (text) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: ADD_POST_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-Type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
        const {data} = await axios.post(`/api/posts`,text,config)

         dispatch({
             type:ADD_POST_SUCCESS,
             payload:data
         })
       } 
       catch (error) {
        
        dispatch({
            type:ADD_POST_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  
    
   
