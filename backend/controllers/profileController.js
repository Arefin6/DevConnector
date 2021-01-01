import Profile from '../models/ProfileModel.js'
import asyncHandler from 'express-async-handler'

//@route Get /api/profile/test
//@desc Tet route
//@access public

const testRoute = (req,res) =>{
    res.send({message:"Profile is Running"});
}

//@route Get /api/profile
//@desc Get Current User Profile
//@access private

const getCurrentProfile = asyncHandler(async(req,res) =>{

   const profile = await Profile.findOne({user:req.user})

   if(!profile){
       res.status(404)
       res.json({
           message:'This user Does not have Profile'
       })
   }
   else{
       res.send(profile)
   }

})

export {testRoute,getCurrentProfile}
