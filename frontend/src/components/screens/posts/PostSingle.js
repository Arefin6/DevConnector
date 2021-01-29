import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singlePost } from '../../../actions/postAction';
import Message from '../../Message';
import CommentFrom from './CommentFrom';
import Comments from './Comments';
import PostSingleDetails from './PostSingleDetails';

const PostSingle = () => {

  const dispatch = useDispatch()
  const{id} = useParams()

 
    const postSingle = useSelector(state =>state.postSingle)
    const {post} = postSingle
     
    const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 
  
    
    useEffect(()=>{
        dispatch(singlePost(id))
    },[dispatch,id,singlePost])
    
    return (
  <>
   <div className="post">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
       
          <PostSingleDetails postSingle={postSingle}></PostSingleDetails>
         
          <CommentFrom></CommentFrom>
          
          {post.comments.length === 0 && <Message variant="primary">No Comments Yet</Message>}
           
           {
            post.comments.map(comment => (
              <Comments key = {comment._id} postId={post._id} userInfo={userInfo} comment={comment}></Comments>
            )) 
           }
          </div>
        </div>
      </div>
  </div>
  </>
  
    );
};

export default PostSingle;