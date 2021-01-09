import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
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
