import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addEduAction} from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';

const AddEducationScreen = () => {

    const initialState = {
        college: '',
        degree: '',
        fieldOfStudy: '',
        current: false,
        description:''
     
      };

    const history = useHistory()
    const dispatch =  useDispatch()

    const [formData,setFormData] = useState(initialState)

    const userLoggedIn = useSelector(state =>state.userLogin)
    const {loading,userInfo} = userLoggedIn 

    const profileAddEdu = useSelector(state =>state.profileAddEdu)
    const {success,error} = profileAddEdu 

    const {
        college,
        degree,
        fieldOfStudy,
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
        dispatch(addEduAction(formData))
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
          <h1 className="display-4 text-center">Add Your Education</h1>
          <p className="lead text-center">Add any College Degree that you have had in the past</p>
    
          <form onSubmit={submitHandler} >
            <div className="form-group my-3">
              <input type="text" 
              value={college}
              onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="Your college" name="college" required />
            </div>
            <div className="form-group my-3">
              <input type="text"
                value={degree}
                onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="degree" name="degree" required />
            </div>
            <div className="form-group my-3">
              <input type="text"
               value={fieldOfStudy}
               onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="fieldOfStudy" name="fieldOfStudy" />
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
               value={to}
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
                Current Student
              </label>
            </div>
            <div className="form-group my-3">
              <textarea 
               value={description}
               onChange={handleOnChange}
              className="form-control form-control-lg" placeholder="Program Description" name="description"></textarea>
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

export default AddEducationScreen;