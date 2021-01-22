import { ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS,
   POST_ALL_FAIL, POST_ALL_REQUEST, POST_ALL_SUCCESS, POST_DELETE_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS } from '../constants/postConstants.js'

export const postCreateReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case ADD_POST_REQUEST:
          return{
              loading:true,
          }
        case ADD_POST_SUCCESS:
           return{
               loading:false,
               post:action.payload,
               success:true
           } 
        case ADD_POST_FAIL:
           return{
               loading:false,
               error:action.payload,
               success:false
           } 
         default:
           return state           
    }
  }

  export const postAllReducer = (state = {posts:[]},action)=>{
  
    switch(action.type){
      
        case POST_ALL_REQUEST:
          return{
              loading:true,
              posts:[]
          }
        case POST_ALL_SUCCESS:
           return{
               loading:false,
               posts:action.payload
           } 
        case POST_ALL_FAIL:
           return{
               loading:false,
               error:action.payload
           } 
         default:
           return state           
    }
  }
  
  export const postDeleteReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case POST_DELETE_REQUEST:
          return{
              ...state, 
              loading:true,
          }
        case POST_DELETE_SUCCESS:
           return{
               loading:false,
               success:true
           } 
        case POST_DELETE_FAIL:
           return{
               loading:false,
               success:false,
               error:action.payload
           } 
         default:
           return state           
    }
  } 