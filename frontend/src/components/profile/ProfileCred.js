import React from 'react';

const ProfileCred = ({portfolio}) => {
    return (
       
        <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          <ul className="list-group">
            {
             portfolio.experience.length>0 ? (
               portfolio.experience.map(exp =>(
               <li className="list-group-item" key={exp.index}>
              <h4>{exp.company}</h4>
              <p>{exp.from.substring(0,10)} - {exp.current ? "Current" : exp.to.substring(0,10)}</p>
            
              <p>
                <strong>Description:</strong>{exp.description}</p>
            </li>
               ))
             ) :(
              <h4>This User Have No experience yet</h4>  
             )
               
            }
            
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">
           
              {
               portfolio.education.length>0 ?
               (
                portfolio.education.map(edu =>(
                   
                  <li className="list-group-item" key={edu.index}>
                  <h4>{edu.college}</h4>
                  <p>{edu.from.substring(0,10)} - {edu.current ? 'current' : edu.to.substring(0,10)}</p>
                  <p>
                    <strong>Degree: </strong>{edu.degree}</p>
                  <p>
                    <strong>Field Of Study: </strong>{edu.fieldOfStudy}</p>
                  <p> 
                      <strong>Description:</strong>{edu.description}</p>
                </li>
                
                )) 
        
               ):(
                <h4>This profile Has No Education yet</h4>
               ) 
              }
              

              
          </ul>
        </div>
      </div>
    );
};

export default ProfileCred;