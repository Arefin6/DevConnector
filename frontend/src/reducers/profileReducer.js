import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_DETAILS_FAIL,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_REQUEST
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


export const profileSingleReducer = (state ={profile:{}},action)=>{
   
    switch(action.type){

        case PROFILE_DETAILS_REQUEST:
          return{...state,loading:true}

        case PROFILE_DETAILS_SUCCESS:
           return{  loading:false,profile:action.payload}

        case PROFILE_DETAILS_FAIL:
           return{ loading:false,error:action.payload} 
           
         default:
           return state           
    }
}
