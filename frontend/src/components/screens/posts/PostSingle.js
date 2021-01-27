import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singlePost } from '../../../actions/postAction';
import CommentFrom from './CommentFrom';
import PostSingleDetails from './PostSingleDetails';
import Comments from './Comments';
import Message from '../../Message';

const PostSingle = () => {

  const dispatch = useDispatch()
  const{id} = useParams()

 
    const postSingle = useSelector(state =>state.postSingle)
    const {post} = postSingle
    
    useEffect(()=>{
        dispatch(singlePost(id))
    },[dispatch,id])
    
    return (
  <>
   <div class="post">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
       
          <PostSingleDetails postSingle={postSingle}></PostSingleDetails>
         
          <CommentFrom></CommentFrom>

          {
            post.comments.length>0 ?

            post.comments.map(comment => (
              <Comments comments={comment}></Comments> 
            ))
            :(
              <Message variant="info">No Comments Yet</Message>
            )
          }
           
        
         
          </div>
        </div>
      </div>
  </div>
  </>
  
    );
};

export default PostSingle;