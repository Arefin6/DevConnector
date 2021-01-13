import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addExpAction } from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';

const AddExperienceScreen = () => {

    const initialState = {
        title: '',
        company: '',
        location: '',
        current: false,
        description:''
     
      };

    const history = useHistory()
    const dispatch =  useDispatch()

    const [formData,setFormData] = useState(initialState)

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {loading,userInfo} = userLoggedIn 

    const profileAddExp = useSelector(state =>state.profileAddExp)
    const {success,error} = profileAddExp 

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      } = formData;


    const handleOnChange = (e) =>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

  const toggleCurrentValue = () =>{
      setFormData({...formData,current:!current})
  }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(addExpAction(formData))
    } 
     
    useEffect(()=>{
       if(!userInfo){
          history.push('/login') 
       }
       if(success){
           history.push('/dashboard')
       } 
    },[userInfo,success,history])

    return (
   <>
   {loading  ?<Loader></Loader>
   : error ? <Message >{error}</Message> 
   :(
    <div className="section add-experience">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <Link to="/dashboard" className="btn btn-light">
            Go Back
          </Link>
          <h1 className="display-4 text-center">Add Your Experience</h1>
          <p className="lead text-center">Add any developer/programming positions that you have had in the past</p>
    
          <form onSubmit={submitHandler} >
            <div className="form-group my-3">
              <input type="text" 
              value={title}
              onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="* Job Title" name="title" required />
            </div>
            <div className="form-group my-3">
              <input type="text"
                value={company}
                onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="* Company" name="company" required />
            </div>
            <div className="form-group my-3">
              <input type="text"
               value={location}
               onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="Location" name="location" />
            </div>
            <h6>From Date</h6>
            <div className="form-group my-3">
              <input type="date" 
               value={from}
               onChange={handleOnChange}
              className="form-control form-control-lg" name="from" />
            </div>
            <h6>To Date</h6>
            <div className="form-group my-3">
              <input type="date" 
               value={current ? current:to}
               onChange={handleOnChange}
               disabled={current}
              className="form-control form-control-lg" name="to" />
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" 
              type="checkbox" name="current" value={current}
               checked={current}
               onChange={toggleCurrentValue}
              id="current" />
              <label className="form-check-label" htmlFor="current">
                Current Job
              </label>
            </div>
            <div className="form-group my-3">
              <textarea 
               value={description}
               onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="Job Description" name="description"></textarea>
              <small className="form-text text-muted">Some of your responsabilities, etc</small>
            </div>
            <input type="submit" className="btn btn-info col-12 text-white mt-4" />
          </form>
        </div>
      </div>
    </div>
   </div>  
   )
   }
    
  </>
    );
};

export default AddExperienceScreen;