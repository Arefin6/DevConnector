import { ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../constants/postConstants.js'

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