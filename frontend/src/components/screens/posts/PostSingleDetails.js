import React from 'react';
import Loader from '../../Loader';
import Message from '../../Message';

const PostSingleDetails = ({postSingle}) => {
    
   const  {post,loading,err} = postSingle

    return (
        <>
        {loading ? <Loader></Loader>
        : err ? <Message>{err}</Message>
        :
        <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-2">
                <a href="profile.html">
                  <img class="rounded-circle d-none d-md-block" src={post.avatar}
                    alt={post.name} />
                </a>
                <br />
                <p class="text-center">{post.name}</p>
              </div>
              <div class="col-md-10">
                <p class="lead">{post.text}</p>
              </div>
            </div>
          </div>  
         }
          
        </>
    );
};

export default PostSingleDetails;