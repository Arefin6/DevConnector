import { ADD_COMMENT_FAIL, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  POST_ADD_LIKE_FAIL,
  POST_ADD_LIKE_REQUEST,
  POST_ADD_LIKE_RESET,
  POST_ADD_LIKE_SUCCESS,
   POST_ALL_FAIL, POST_ALL_REQUEST, POST_ALL_SUCCESS, POST_DELETE_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_SINGLE_FAIL, POST_SINGLE_REQUEST, POST_SINGLE_SUCCESS, POST_UNLIKE_FAIL, POST_UNLIKE_REQUEST, POST_UNLIKE_SUCCESS } from '../constants/postConstants.js'

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
  export const postAddLikeReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case POST_ADD_LIKE_REQUEST:
          return{
              ...state, 
              loading:true,
          }
        case POST_ADD_LIKE_SUCCESS:
           return{
               loading:false,
               success:true
           } 
        case POST_ADD_LIKE_FAIL:
           return{
               loading:false,
               success:false,
               error:action.payload
           } 
         case POST_ADD_LIKE_RESET:
           return {}  
         default:
           return state           
    }
  }
  
  export const postUnLikeReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case POST_UNLIKE_REQUEST:
          return{
              ...state, 
              loading:true,
          }
        case POST_UNLIKE_SUCCESS:
           return{
               loading:false,
               success:true
           } 
        case POST_UNLIKE_FAIL:
           return{
               loading:false,
               success:false,
               error:action.payload
           } 
         case POST_ADD_LIKE_RESET:
           return {}  
         default:
           return state           
    }
  } 
  

  export const postSingleReducer = (state = {post:{comments:[]}},action)=>{
  
    switch(action.type){
      
        case POST_SINGLE_REQUEST:
          return{
              ...state, 
              loading:true,
          }
        case POST_SINGLE_SUCCESS:
           return{
               loading:false,
               post:action.payload
           } 
        case POST_SINGLE_FAIL:
           return{
               loading:false,
               error:action.payload
           }
         default:
           return state           
    }
  } 


  export const commentAddReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case ADD_COMMENT_REQUEST:
          return{
              loading:true,
          }
        case ADD_COMMENT_SUCCESS:
           return{
               loading:false,
               success:true
           } 
        case ADD_COMMENT_FAIL:
           return{
               loading:false,
               error:action.payload,
               success:false
           } 
         default:
           return state           
    }
  }


  export const commentDeleteReducer = (state = {},action)=>{
  
    switch(action.type){
      
        case DELETE_COMMENT_REQUEST:
          return{
              ...state, 
              loading:true,
          }
        case DELETE_COMMENT_SUCCESS:
           return{
               loading:false,
               success:true
           } 
        case DELETE_COMMENT_FAIL:
           return{
               loading:false,
               success:false,
               error:action.payload
           } 
         default:
           return state           
    }
  } 
   
  
  
  