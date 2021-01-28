import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({comment}) => {
  
    return (
        <>
                
         <div className="comments">
          
          <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <Link to={`/profile/${comment.user}`}>
                  <img className="rounded-circle d-none d-md-block" src={comment.avatar} alt="" />
                </Link>
                <br />
                <p className="text-center">{comment.name}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{comment.comment}</p>
              </div>
            </div>
          </div>
        </div>
 
        </>
    );
};

export default Comments;