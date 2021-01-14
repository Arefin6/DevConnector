import React from 'react';

const DashboardEducation = ({profile}) => {
   
   const handleDelete = (id) => {
    console.log(id)
   }
   
    return (
        <>
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
                        
                        {profile.education.length >0 ?
                        (
                         profile.education.map((edu,index) =>(
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
        </>
    );
};

export default DashboardEducation;