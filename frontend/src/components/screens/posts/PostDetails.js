import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, likePost, UnlikePost } from '../../../actions/postAction';
import { POST_ADD_LIKE_RESET } from '../../../constants/postConstants';
import Loader from '../../Loader';
import Message from '../../Message';

const PostDetails = ({post,userInfo}) => {

    const dispatch = useDispatch()

 
    const postDelete = useSelector(state =>state.postDelete)
    const {loading,success,error} = postDelete

    const  postLike = useSelector(state =>state.postLike)
    const {success:successLike,error:errorLike} = postLike

    const  postUnLike = useSelector(state =>state.postUnLike)
    const {success:successUnLike,error:errorUnLike} = postUnLike


    const handleDelete = (id) =>{
        if(window.confirm('Are You Sure ?')){
            dispatch(deletePost(id))
        }
     
    }

    const handleAddLike = (id)=>{
      dispatch(likePost(id))
    } 

    const handleUnLike = (id) =>{
       dispatch(UnlikePost(id))
    }
    
    const checkedLiked = (likes) =>{

        if(likes.filter(like => like.user === userInfo._id).length>0){
            return true
        }
        else{
            return false
        }
    
    }
   

    useEffect(()=>{
       if(success){
          window.location.reload() 
       }
       if(successLike){
           dispatch({type:POST_ADD_LIKE_RESET})
           window.location.reload()
       }
       if(successUnLike){
           window.location.reload()
       }
    
    },[success,successLike,successUnLike,dispatch])
   
    return (
        <>
        {loading ? <Loader></Loader>:(
          error ? <Message>{error}</Message>
          :(
            <div className="posts">         
            <div className="card card-body mb-3">
              <div className="row">
                   
              {errorLike && <Message  variant={"info"}>{errorLike}</Message>}  
              {errorUnLike && <Message variant={"info"}>{errorUnLike}</Message>}  
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
                  <button type="button" 
                  onClick={()=>handleAddLike(post._id)} 
                  className="btn btn-light mr-1">
                    <i className={checkedLiked(post.likes) ? "text-info fas fa-thumbs-up": "fas fa-thumbs-up"}></i>
                    <span className="text-dark mx-2">{post.likes.length}</span>
                  </button>
                  <button type="button" 
                  onClick={()=>handleUnLike(post._id)} 
                  className="btn btn-light mr-1">
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