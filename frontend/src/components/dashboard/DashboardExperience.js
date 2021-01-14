import React from 'react';

const DashboardExperience = ({profile}) => {
    return (
        <>
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
                              <button className="btn btn-danger">
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

        </>
    );
};

export default DashboardExperience;