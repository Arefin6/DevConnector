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
    PROFILE_DELETE_EXPERIENCE_FAIL,
    PROFILE_DELETE_EXPERIENCE_SUCCESS,
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

export const profileAddExpReducer = (state = {},action)=>{
  
  switch(action.type){
    
      case PROFILE_ADD_EXPERIENCE_REQUEST:
        return{
            ...state,
            loading:true,
        }
      case PROFILE_ADD_EXPERIENCE_SUCCESS:
         return{
             loading:false,
             success:true
         } 
      case PROFILE_ADD_EXPERIENCE_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}

export const profileAddEducation = (state = {},action)=>{
  
  switch(action.type){
    
      case PROFILE_ADD_EDUCATION_REQUEST:
        return{
            ...state,
            loading:true,
        }
      case PROFILE_ADD_EDUCATION_SUCCESS:
         return{
             loading:false,
             success:true,
             profile:action.payload
         } 
      case PROFILE_ADD_EDUCATION_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}

export const profileDeleteEducation = (state = {},action)=>{
  
  switch(action.type){
    
      case PROFILE_DELETE_EDUCATION_REQUEST:
        return{
            ...state,
            loading:true,
        }
      case PROFILE_DELETE_EDUCATION_SUCCESS:
         return{
             loading:false,
             success:true
         } 
      case PROFILE_DELETE_EDUCATION_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}

export const profileDeleteExperience = (state = {},action)=>{
  
  switch(action.type){
    
      case PROFILE_DELETE_EXPERIENCE_REQUEST:
        return{
            ...state,
            loading:true,
        }
      case PROFILE_DELETE_EXPERIENCE_SUCCESS:
         return{
             loading:false,
             success:true
         } 
      case PROFILE_DELETE_EXPERIENCE_FAIL:
         return{
             loading:false,
             success:false,
             error:action.payload
         } 
       default:
         return state           
  }
}



