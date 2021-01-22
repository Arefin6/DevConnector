import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost, getAllPost } from '../../../actions/postAction';
import Loader from '../../Loader';
import Message from '../../Message';
import PostDetails from './PostDetails';

const PostFeedScreen = () => {
   const [text,setText] = useState('');
   const dispatch = useDispatch()
   const history = useHistory()

   const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 

   const postCreate = useSelector(state => state.postCreate)
   const {loading,error,success} = postCreate 

   const postAll = useSelector(state => state.postAll)
   const {error:postError,posts} = postAll 
  
  
   const handleSubmit = (e) =>{
       e.preventDefault()
       dispatch(addPost({text})) 
      
   } 
   useEffect(()=>{
     if(!userInfo){
         history.push('/login')
     }
     if(success){
       setText('')
     }
     dispatch(getAllPost())

   },[success,history,userInfo,dispatch])
    
   
    return (
  <>
  {loading ? <Loader></Loader>
  : error ? <Message>{error}</Message>
  :
  <div className="feed">
  <div className="container">
    <div className="row">
      <div className="col-md-12">

        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white">
              Say Somthing...
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} encType='application/json' >
                <div className="form-group my-2">
                  <textarea  type="text" value={text} onChange={(e)=>setText(e.target.value)}  className="form-control form-control-lg" placeholder="Create a post"></textarea>
                </div>
                <input type="submit" value="submit" className="btn btn-dark mt-2" />
              </form>
            </div>
          </div>
          {
            postError ? <Message>{postError}</Message>

            :(
             posts.map(post =>(
              <PostDetails key={post._id} post={post} userInfo={userInfo}></PostDetails>
             )) 
            )
          }
       
        </div>
      </div>
    </div>
  </div>
 </div>
  }

 
 
</>
    );
};

export default PostFeedScreen;