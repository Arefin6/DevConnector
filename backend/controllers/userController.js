import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import gravatar from 'gravatar'

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
    
    res.send(user)
 }
})

export {testApi,registerUser}