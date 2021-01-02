import Profile from '../models/ProfileModel.js'
import asyncHandler from 'express-async-handler'
import normalize from 'normalize-url'

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


//@route POST /api/profile
//@desc Get A Profile
//@access private

const createProfile = asyncHandler(async(req,res) =>{
    const {
        website,
        skills,
        status,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        bio,
        // spread the rest of the fields we don't need to check
        ...rest
      } = req.body;

      const socialFields = { youtube, twitter, instagram, linkedin, facebook };

    // normalize social fields to ensure valid url
    for (const [key, value] of Object.entries(socialFields)) {
      if (value && value.length > 0)
        socialFields[key] = normalize(value, { forceHttps: true });
    }

    const createdProfile = await Profile.create({
        user:req.user._id,
        website:
        website && website !== ''
          ? normalize(website, { forceHttps: true })
          : '',
          skills: Array.isArray(skills)
          ? skills
          : skills.split(',').map((skill) => ' ' + skill.trim()),
          status,  
          social:socialFields,
          bio,
       ...rest
    });

    if(createdProfile){
        res.status(201).json(createdProfile)
    }
    else{
        res.status(500)
        res.send({message:"something went wrong"})
    }

   
 })


export {testRoute,getCurrentProfile,createProfile}
