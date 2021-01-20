import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../../actions/postAction';
import Loader from '../../Loader';
import Message from '../../Message';

const PostFeedScreen = () => {
   const [text,setText] = useState('');
   const dispatch = useDispatch()
   const history = useHistory()

   const userLoggedIn = useSelector(state =>state.userLogin)
    const {userInfo} = userLoggedIn 

   const postCreate = useSelector(state => state.postCreate)
   const {loading,error,success} = postCreate 
  
  
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
   },[success,history,userInfo])
    
   
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
        </div>

 
        <div className="posts">         
          <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <a href="profile.html">
                  <img className="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="" />
                </a>
                <br />
                <p className="text-center">John Doe</p>
              </div>
              <div className="col-md-10">
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                  nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                  eveniet cum cupiditate aliquam?</p>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-info fas fa-thumbs-up"></i>
                  <span className="badge badge-light">4</span>
                </button>
                <button type="button" className="btn btn-light mr-1">
                  <i className="text-secondary fas fa-thumbs-down"></i>
                </button>
                <a href="post.html" className="btn btn-info mr-1">
                  Comments
                </a>
                 <button type="button" className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button> 
              </div>
            </div>
          </div>

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