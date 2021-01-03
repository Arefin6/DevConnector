import Post from '../models/PostModel.js'
import asyncHandler from 'express-async-handler'

//@route Get /api/profile/test
//@desc Tet route
//@access public

const testRoute = (req,res) =>{
    res.send({message:"Post is Running"});
}

//@route POST /api/posts/
//@desc Create Post
//@access private

const createPost = asyncHandler(async(req,res)=>{
             
  const post = await Post.create({
      user:req.user.id,
      name:req.user.name,
      avatar:req.user.avatar,
      text:req.body.text
  })

   res.send(post)

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
         await Post.remove()
         
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
        return res.status(404).json(error)
         
      }
      //check Already liked or not
      if(post.likes.find(like => like.user.toString() === req.user.id )){
           res.status(400).json({alreadyLiked:"You Already Liked the post"})   
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
           res.status(400).json({NotLiked:"You Have not Liked the post"})   
      }
      else{
          post.likes = post.likes.filter(like => like.user.toString() !== req.user.id)
          
          await post.save()

          res.send(post) 
      }
    
  
  })




export {testRoute,createPost,getPosts,getSinglePost,deletePost,likePost,unlikePost}
