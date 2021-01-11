import axios from 'axios';

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstants';

export const userLoginAction = (email,password) =>async(dispatch)=>{
    try {
         
        dispatch({type: USER_LOGIN_REQUEST})
         
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(`/api/users/login`,
         {email,password},config
        )
        
         dispatch({
             type:USER_LOGIN_SUCCESS,
             payload:data
         })
         localStorage.setItem('userInfo',JSON.stringify(data))

       } catch (error) {
        
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   } 

   export const userLogout = () => (dispatch) =>{
       dispatch({type:USER_LOGOUT})
       localStorage.removeItem('userInfo');
       document.location.href = '/'
   }

   export const userRegisterAction = (name,email,password) =>async(dispatch)=>{
    try {
         
        dispatch({type: USER_REGISTER_REQUEST})
         
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(`/api/users/register`,
         {name,email,password},config
        )
        
         dispatch({
             type:USER_REGISTER_SUCCESS,
             payload:data
         })
         localStorage.setItem('userInfo',JSON.stringify(data))

       } catch (error) {
        
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }   
   } 
