import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {userLoginAction} from '../../actions/userAction';
import Loader from '../Loader';
import Message from '../Message';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory()
    
    const dispatch  = useDispatch()
     
    const userLogin = useSelector(state => state.userLogin)
    const {loading,error,userInfo} = userLogin 
     
    
     
    useEffect(()=>{
         if(userInfo){
             history.push('/dashboard')
         }
         
     },[history,userInfo])
   

    const loginHandler = (e)=>{
        e.preventDefault()
        dispatch(userLoginAction(email,password))
    }
    return (
    <>
    {loading && <Loader></Loader>}
    {error && <Message >{error}</Message>}
    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <form onSubmit={loginHandler}>
            <div className="form-group my-3">
              <input type="email" 
               value={email} onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg" placeholder="Email Address" name="email" />
            </div>
            <div className="form-group my-3">
              <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <input type="submit" className="btn btn-info col-12 text-white mt-4" />
          </form>
        </div>
      </div>
    </div>
   </div>   
  </>
    );
};

export default Login;