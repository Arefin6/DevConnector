import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRegisterAction } from '../../actions/userAction';
import Loader from '../Loader';
import Message from '../Message';

const Register = () => {
    
    const history = useHistory()

    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [conPassword,setConPassword] = useState('')
    const [message,setMessage] = useState('')
     

    const userRegister = useSelector(state => state.userRegister)
    const {loading,error,userInfo} = userRegister  
     
   useEffect(()=>{
       if(userInfo){
         history.push('/dashboard')
       }
   },[history,userInfo])

  
    const registerHandler = (e)=>{
     e.preventDefault()
      if(password !== conPassword){
        setMessage('Password Did not match')
      } 
      else{
        dispatch(userRegisterAction(name,email,password))
      }


    } 

  
    return (
   <>

   <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
           {error && <Message>{error}</Message>}
           {loading && <Loader></Loader>}
           {message && <Message>{message}</Message>}
          <form onSubmit={registerHandler}>
            <div className="form-group my-3">
              <input  
                value={name} onChange={(e) => setName(e.target.value)}
              type="text" className="form-control form-control-lg" placeholder="Name" name="name" required />
            </div>
            <div className="form-group my-3">
              <input type="email"
                   value={email} onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg" placeholder="Email Address" name="email" />
              <small classNameName="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group my-3">
              <input type="password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <div className="form-group my-3">
              <input type="password"
                  value={conPassword} onChange={(e) => setConPassword(e.target.value)}
              className="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
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

export default Register;