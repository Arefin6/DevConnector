import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../actions/postAction';
import Loader from '../../Loader';
import Message from '../../Message';

const CommentFrom = () => {

  const dispatch = useDispatch()
  const{id} = useParams()

   const [comment,setComment] = useState("");
 
    const commentAdd = useSelector(state =>state.commentAdd)
    const {loading,success,error} = commentAdd
     
  const handleSubmit = (e) =>{
    e.preventDefault()
   dispatch(addComment(id,{comment})) 
  
  }
    
    useEffect(()=>{
        if(success){
          window.location.reload()
        }
    },[success])

    
    return (
        <> 
        {loading && <Loader></Loader>}
         {error && <Message>{error}</Message> }
            <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header bg-info text-white">
                Say Somthing...
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea value={comment} onChange={(e)=>setComment(e.target.value)}   className="form-control form-control-lg" placeholder="Comment"></textarea>
                  </div>
                  <button type="submit" className="btn my-3 btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>  
        </>
    );
};

export default CommentFrom;