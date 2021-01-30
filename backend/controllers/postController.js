import Post from '../models/PostModel.js';
import asyncHandler from 'express-async-handler';

//@route Get /api/profile/test
//@desc Tet route
//@access public

const testRoute = (req,res) =>{
    res.send({message:"Post is Running"})
}

//@route POST /api/posts/
//@desc Create Post
//@access private

const createPost = asyncHandler(async(req,res)=>{

  const {text} =req.body

 
  const createdPost = await Post.create({
      text:text,
      user:req.user._id,
      name:req.user.name,
      avatar:req.user.avatar
  })
  
  if(createdPost){
   
    res.status(201).json(createdPost)
}
else{
    res.status(500).json({message:"something went wrong"})
}
 
})

//@route Get /api/posts/
//@desc Get All Post
//@access public

const getPosts = asyncHandler(async(req,res)=>{
             
    const foundPosts = await Post.find({}).sort({createdAt:-1})

      if(foundPosts){
          res.send(foundPosts)
      }
      else{
          res.status(404)
          res.json({message:"No Posts Founds"})
      }
  
  })

  //@route Get /api/posts/:Id
//@desc Get Post By Id
//@access public

const getSinglePost = asyncHandler(async(req,res)=>{
             
    const foundPost = await Post.findById(req.params.id)

      if(!foundPost){
         const error = "No Post Found"  
         res.status(404).json(error)
         
      }
      else{
        res.send(foundPost)
      }
  
  })
 
//@route DELETE /api/posts/:Id
//@desc Delete Post By Id
//@access private

const deletePost = asyncHandler(async(req,res)=>{
             
    const foundPost = await Post.findById(req.params.id)

      if(!foundPost){
         const error = "No Post Found"  
        return res.status(404).json(error)
         
      }
      //check User 

      if(foundPost.user.toString() !== req.user.id){
          return res.status(401).json({error:"Not Authorized"})
      }
      else{
         await foundPost.remove()
         
         res.send({message:'Post removed'})
      }
  
  })



   
//@route Put /api/posts/like/:Id
//@desc Like a Post
//@access private

const likePost = asyncHandler(async(req,res)=>{
             
    const post = await Post.findById(req.params.id)

      if(!post){
         const error = "No Post Found"  
         res.status(404).json(error)
         
      }
      //check Already liked or not
      if(post.likes.find(like => like.user.toString() === req.user.id )){
           res.status(400).json({message:"You Already Liked the post"})   
      }
      else{
          post.likes.unshift({user:req.user.id})

          await post.save()

          res.send(post) 
      }
    
  
  })

  //@route Put /api/posts/unlike/:Id
//@desc unLike a Post
//@access private

const unlikePost = asyncHandler(async(req,res)=>{
             
    const post = await Post.findById(req.params.id)

      if(!post){
         const error = "No Post Found"  
        return res.status(404).json(error)
         
      }
      //check Already liked or not
      if(!post.likes.find(like => like.user.toString() === req.user.id )){
           res.status(400).json({message:"You Have not Liked the post"})   
      }
      else{
          post.likes = post.likes.filter(like => like.user.toString() !== req.user.id)
          
          await post.save()

          res.send(post) 
      }
    
  
  })
 

  //@route Put /api/posts/comment/:Id
//@desc Comment on a Post
//@access private

const addComment = asyncHandler(async(req,res)=>{
             
    const post = await Post.findById(req.params.id)


      if(!post){
         
        return res.status(404).json({message:"No Post Found"})
         
      }
      const {comment} =req.body
      //Create Comment
      const newComment ={
          comment:comment,
          user:req.user._id,
          name:req.user.name,
          avatar:req.user.avatar,
        
      } 
    
     post.comments.unshift(newComment) 

     await post.save()

     res.send(post)
  
  })

 

 //@route Delete /api/posts/comment/:Id/:commentId
//@desc Delete Comment on a Post
//@access private

const deleteComment = asyncHandler(async(req,res)=>{
             
    const post = await Post.findById(req.params.id)

      if(!post){
         const error = "No Post Found"  
        return res.status(404).json(error)
         
      }

   
     //check the comment is  exits or not
    
     const comment = post.comments.find(comment => comment.id === req.params.commentId)

     if(!comment){
         return res.status(404).json({message:'Comment Not Found'})
     }

     //check User

     if(comment.user.toString() !== req.user.id){
        return res.status(401).json({message:"Un Authorized Access"})
     }
    
     post.comments = post.comments.filter(comment => comment.id !== req.params.commentId )
    
     await post.save()
     
     res.send(post)

  
  })

export {testRoute,createPost,getPosts,getSinglePost,
    deletePost,likePost,unlikePost
,addComment,deleteComment}
