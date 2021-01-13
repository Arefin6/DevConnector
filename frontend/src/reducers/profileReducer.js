import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
    PROFILE_CURRENT_FAIL,
    PROFILE_CURRENT_SUCCESS,
    PROFILE_CURRENT_REQUEST,
    PROFILE_CREATE_REQUEST,
    PROFILE_CREATE_SUCCESS,
    PROFILE_CREATE_FAIL,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_REQUEST,
} from '../constants/profileConstants';

export const profilesReducer = (state = {profiles:[]},action)=>{
  
    switch(action.type){
        case PROFILE_REQUEST:
          return{
              loading:true,
              profiles:[]
          }
        case PROFILE_SUCCESS:
           return{
               loading:false,
               profiles:action.payload
           } 
        case PROFILE_FAIL:
           return{
               loading:false,
               error:action.payload
           } 
         default:
           return state           
    }
}


export const profileDetailsReducer = (state = {portfolio:{user:{},skills:[],social:{},education:[],experience:[]}},action)=>{
  
  switch(action.type){
      case PROFILE_DETAILS_REQUEST:
        return{
            loading:true,
            ...state
        }
      case PROFILE_DETAILS_SUCCESS:
         return{
             loading:false,
             portfolio:action.payload
         } 
      case PROFILE_DETAILS_FAIL:
         return{
             loading:false,
             error:action.payload
         } 
       default:
         return state           
  }
}

export const profileCurrentReducer = (state = {profile:{user:{},skills:[],social:{},education:[],experience:[]}},action)=>{
  
  switch(action.type){
      case PROFILE_CURRENT_REQUEST:
        return{
            loading:true,
            ...state
        }
      case PROFILE_CURRENT_SUCCESS:
         return{
             loading:false,
             profile:action.payload
         } 
      case PROFILE_CURRENT_FAIL:
         return{
             loading:false,
             error:action.payload
         } 
       default:
         return state           
  }
}


export const profileCreateReducer = (state = {},action)=>{
  
  switch(action.type){
      case PROFILE_CREATE_REQUEST:
        return{
            loading:true,
        }
      case PROFILE_CREATE_SUCCESS:
         return{
             loading:false,
             profile:action.payload,
             success:true
         } 
      case PROFILE_CREATE_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}

export const profileUpdateReducer = (state = {},action)=>{
  
  switch(action.type){
      case PROFILE_UPDATE_REQUEST:
        return{
            ...state,
            loading:true,
        }
      case PROFILE_UPDATE_SUCCESS:
         return{
             loading:false,
             profile:action.payload,
             success:true
         } 
      case PROFILE_UPDATE_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}


