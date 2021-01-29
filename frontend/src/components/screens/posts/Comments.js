import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../../actions/postAction';
import Message from '../../Message';

const Comments = ({postId,comment,userInfo}) => {
  
  const dispatch = useDispatch()

 
  const commentDelete = useSelector(state =>state.commentDelete)
  const {success,error} = commentDelete

   const handleDelete = (commentId) =>{
       if(window.confirm("Are you Sure?")){
         dispatch(deleteComment(postId,commentId))
       }
   }
   useEffect(()=>{
       if(success){
         window.location.reload()
       }
   },[success])

    return (
        <>
         {error && <Message>{error}</Message>}       
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
                {
                      userInfo._id ===  comment.user ?
                      <button 
                      onClick={() => handleDelete(comment._id)}
                      type="button" className="btn btn-danger ml-2">
                      <i className="fas fa-trash" />
                    </button> :null
                   }
              </div>
               
            </div>
          </div>
        </div>
 
        </>
    );
};

export default Comments;