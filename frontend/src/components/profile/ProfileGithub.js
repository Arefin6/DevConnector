import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileGithub = ({userName}) => {

   const [repos,setRepos] =useState([])

   const clientId = '65b818c7eb70adaec654'
   const clientSecret = '7b6fb5b7fb8fa89e4238b4ba556004b06ed51d07' 

   useEffect(()=>{
      
    fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_scret=${clientSecret}`) 
    .then(res => res.json())
    .then(data => setRepos(data))
    .catch(err => console.log(err))

   },[userName])

    return (
       <div >
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {
         repos.map(repo =>(
          <div  key={repo.id} className="card card-body mb-2">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={repo.html_url}  style={{textDecoration:'none'}} className="text-info" target="_blank"> {repo.name}
                </Link>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="alert alert-primary ms-2">
                Stars: {repo.stargazers_count}
              </span>
              <span className="alert alert-secondary ms-2">
                Watchers: {repo.watchers_count}
              </span>
              <span className="alert alert-success ms-2">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
         )) 
        } 
      
      </div>
    
    );
};

export default ProfileGithub;