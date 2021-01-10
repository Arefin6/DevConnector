import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import gravatar from 'gravatar';
import generateAuthToken from '../utilities/generateAuthToekn.js' 

//@route Get /api/User/Test
//@desc Tet route
//@access public

const testApi = (req,res) =>{
    res.send({message:"User Works"})
}

//@route Post /api/user/register
//@desc Register new User
//@access public

const registerUser = asyncHandler(async (req,res) =>{ 
   
    const{name,email,password} = req.body
    
    const userExits = await User.findOne({email})
    
    if(userExits){
        res.status(400)
        res.json({message:"Email Already Used"})
    }
    else{
    const avatar = gravatar.url(email,{
        s:"200", //Size
        r:"pg", //rating
        d:"mm" //default
    })

    const user = await User.create({
        name,
        email,
        password,
        avatar
    })
      if(user){
          res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            avatar,
            token:generateAuthToken(user._id)
          })
      }
      else{
          res.status(404)
          res.json({
          message:"Invalid user data" 
        })
      }    
  
 }
})


//@route Post /api/users/login
//@desc Login User
//@access public

const authUser = asyncHandler(async (req,res) =>{ 
   
    const{email,password} = req.body
    
    const user = await User.findOne({email})
    
    if(user && (await user.matchPassword(password))){
       
        res.send({
            _id:user.id,
            name:user.name,
            email:user.email,
            avatar:user.avatar,
            token:generateAuthToken(user._id)
        })
    }
    else{
        
        res.status(401)
          res.json({
          message:"Invalid user data" 
        })
    }

})



export {testApi,registerUser,authUser}