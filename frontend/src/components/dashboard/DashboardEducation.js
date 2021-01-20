import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEducation } from '../../actions/profileAction';
import Loader from '../Loader';
import Message from '../Message';

const DashboardEducation = ({portfolio}) => {

   const dispatch = useDispatch()
  

   const  profileDeleteEdu = useSelector(state => state.profileDeleteEdu)
   const {loading,error,success} = profileDeleteEdu

   
   const handleDelete = (edu_id) => {
        if(window.confirm('Are you Sure')){
          dispatch(deleteEducation(edu_id))
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
            <h4 className="mb-2">Education Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Degree</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                
                {portfolio.education.length >0 ?
                (
                  portfolio.education.map((edu,index) =>(
                    <tr key={index}>
                    <td>{edu.college}</td>
                    <td>{edu.degree}</td>
                    <td>
                    {edu.from.substring(0,10) }  ---  {  edu.to ? edu.to.substring(0,10) : edu.created.substring(0,10)}
                    </td>
                    <td>
                      <button className="btn btn-danger"
                      onClick={()=>handleDelete(edu._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                 ))    
               ):
               ( 
                  <tr>
                    <td>No Education Yet</td> 
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

export default DashboardEducation;