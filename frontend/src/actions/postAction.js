import axios from 'axios'
import {ADD_COMMENT_FAIL, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAIL, ADD_POST_REQUEST,
     ADD_POST_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, POST_ADD_LIKE_FAIL,
      POST_ADD_LIKE_REQUEST, POST_ADD_LIKE_SUCCESS, 
      POST_ALL_FAIL, POST_ALL_REQUEST, POST_ALL_SUCCESS, POST_DELETE_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_SINGLE_FAIL, POST_SINGLE_REQUEST, POST_SINGLE_SUCCESS, POST_UNLIKE_FAIL, POST_UNLIKE_REQUEST, POST_UNLIKE_SUCCESS}from '../constants/postConstants'

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
    
   export const getAllPost = () =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: POST_ALL_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
        const {data} = await axios.get(`/api/posts`,config)

         dispatch({
             type:POST_ALL_SUCCESS,
             payload:data
         })
       } 
       catch (error) {
        
        dispatch({
            type:POST_ALL_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  
     
   export const deletePost = (id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: POST_DELETE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
         await axios.delete(`/api/posts/${id}`,config)

         dispatch({
             type:POST_DELETE_SUCCESS,
         })
       } 
       catch (error) {
        
        dispatch({
            type:POST_DELETE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  


   export const likePost = (id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: POST_ADD_LIKE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
         await axios.put(`/api/posts/like/${id}`,{},config)

         dispatch({
             type:POST_ADD_LIKE_SUCCESS,
         })
       } 
       catch (error) {
        
        dispatch({
            type:POST_ADD_LIKE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  

   export const UnlikePost = (id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: POST_UNLIKE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
         await axios.put(`/api/posts/unlike/${id}`,{},config)

         dispatch({
             type:POST_UNLIKE_SUCCESS,
         })
       } 
       catch (error) {
        
        dispatch({
            type:POST_UNLIKE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }
   
   export const singlePost = (id) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: POST_SINGLE_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
        const {data} = await axios.get(`/api/posts/${id}`,config)

         dispatch({
             type:POST_SINGLE_SUCCESS,
             payload:data
         })
       } 
       catch (error) {
        
        dispatch({
            type:POST_SINGLE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }

   export const addComment = (id,comment) =>async(dispatch,getState)=>{
    try {
         
        dispatch({type: ADD_COMMENT_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                'Content-Type':'application/json',
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
         await axios.put(`/api/posts/comment/${id}`,comment,config)

         dispatch({
             type:ADD_COMMENT_SUCCESS
         })
       } 
       catch (error) {
        
        dispatch({
            type:ADD_COMMENT_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  

   export const deleteComment = (id,commentId) =>async(dispatch,getState)=>{
    try {
         
        dispatch({ type: DELETE_COMMENT_REQUEST})

        const {userLogin:{userInfo}}=getState()
        
        const config = {
            headers:{
                 Authorization:`Bearer ${userInfo.token}`
            }
        }
    
          
         await axios.put(`/api/posts/comment/${id}/${commentId}`,{},config)

         dispatch({
             type:DELETE_COMMENT_SUCCESS,
         })
       } 
       catch (error) {
        
        dispatch({
            type:DELETE_COMMENT_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
     }     
      
   }  
     
      
      
   
