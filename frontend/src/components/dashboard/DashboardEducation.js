import React from 'react';

const DashboardEducation = ({profile}) => {
    return (
        <>
             <div>
                    <h4 className="mb-2">Education Credentials</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>School</th>
                          <th>Degree</th>
                          <th>Years</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {profile.education.length >0 ?
                        (
                         profile.edu.map((edu,index) =>(
                            <tr key={index}>
                            <td>{edu.school}</td>
                            <td>{edu.degree}</td>
                            <td>
                              {edu.from} - {edu.to}
                            </td>
                            <td>
                              <button className="btn btn-danger">
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