import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../../actions/postAction';
import Loader from '../../Loader';
import Message from '../../Message';

const PostDetails = ({post,userInfo}) => {

    const dispatch = useDispatch()

    const postDelete = useSelector(state =>state.postDelete)
    const {loading,success,error} = postDelete


    const handleDelete = (id) =>{
        if(window.confirm('Are You Sure ?')){
            dispatch(deletePost(id))
        }
     
    }

    useEffect(()=>{
       if(success){
          window.location.reload() 
       }
    },[success])
   
    return (
        <>
        {loading ? <Loader></Loader>:(
          error ? <Message>{error}</Message>
          :(
            <div className="posts">         
            <div className="card card-body mb-3">
              <div className="row">
  
                <div className="col-md-2">
                  <Link to={`/profile/${post.user}`}>
                    <img className="rounded-circle d-none d-md-block" src={post.avatar}
                      alt="" />
                  </Link>
                  <br />
                  <p className="text-center">{post.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">{post.text}</p>
                  <button type="button" className="btn btn-light mr-1">
                    <i className="text-info fas fa-thumbs-up"></i>
                    <span className="badge badge-light">4</span>
                  </button>
                  <button type="button" className="btn btn-light mr-1">
                    <i className="text-secondary fas fa-thumbs-down"></i>
                  </button>
                  <Link to={`/post/${post._id}`} className="btn btn-info text-white mx-2">
                    Comments
                  </Link>
                   {
                      userInfo._id ===  post.user ?
                      <button 
                      onClick={() => handleDelete(post._id)}
                      type="button" className="btn btn-danger ml-2">
                      <i className="fas fa-times" />
                    </button> :null
                   }
                 
                </div>
              </div>
            </div>
  
          </div>  
          )  
        )}
          
        </>
    );
};

export default PostDetails;