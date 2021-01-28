import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import Message from '../../Message';

const PostSingleDetails = ({postSingle}) => {
    
   const  {post,loading,err} = postSingle

    return (
        <>
        {loading ? <Loader></Loader>
        : err ? <Message>{err}</Message>
        :
        <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <Link to={`/profile/${post.user}`}>
                  <img className="rounded-circle d-none d-md-block" src={post.avatar}
                    alt={post.name} />
                </Link>
                <br />
                <p className="text-center">{post.name}</p>
              </div>
              <div className="col-md-10">
                <p className="lead">{post.text}</p>
              </div>
            </div>
          </div>  
         }
          
        </>
    );
};

export default PostSingleDetails;