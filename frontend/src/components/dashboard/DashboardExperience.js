import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExperience } from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';

const DashboardExperience = ({profile}) => {


  const dispatch = useDispatch()

  const  profileDeleteExp = useSelector(state => state.profileDeleteExp)
  const {loading,error,success} = profileDeleteExp

  
  const handleDelete = (exp_id) => {
       if(window.confirm('Are you Sure')){
         dispatch(deleteExperience(exp_id))
       }
       
    
  }
  useEffect(()=>{
     if(success){
       window.location.reload()
     }
  },[success])

    return (
        <>
         {loading ? <Loader></Loader>
          :
           error ? <Message>{error}</Message> 
          :
           <div>
              <h4 className="mb-2">Experience Credentials</h4>
                   <table className="table">
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th>Title</th>
                          <th>Years</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {profile.experience.length >0 ?
                        (
                         profile.experience.map((exp,index) =>(
                            <tr key={index}>
                            <td>{exp.company}</td>
                            <td>{exp.title}</td>
                            <td>
                              {exp.from.substring(0,10) }  ---  {  exp.to ? exp.to.substring(0,10) : exp.created.substring(0,10)}
                            </td>
                            <td>
                              <button 
                              onClick={()=> handleDelete(exp._id)}
                              className="btn btn-danger">
                                Delete
                              </button>
                            </td>
                          </tr>
                         ))    
                       ):
                       ( <tr>
                         <td>No Experience Yet</td> 
                       </tr>
                          
                       )
                       }  
                      </tbody>
                    </table>
                  </div>
          }
        </>
    );
};

export default DashboardExperience;