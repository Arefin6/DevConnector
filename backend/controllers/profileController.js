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
        slug,
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
          slug,
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


//@route PUT /api/profile
//@desc Update User Profile
//@access private

const updateProfile = asyncHandler(async(req,res) =>{

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

     const profile = await Profile.findOne({user:req.user._id})

     if(profile){
          profile.website = normalize(website, { forceHttps: true })||profile.website
          profile.status = status||profile.status
          profile.skills =  Array.isArray(skills)
          ? skills
          : skills.split(',').map((skill) => ' ' + skill.trim())||profile.skills
          profile.social = socialFields||profile.social,
          profile.bio = bio||profile.bio

          const updateProfile = await profile.save()

          res.send({
              updateProfile
          })

        } 
     else{
         res.status(404)
         res.json({
             message:'No Profile Found'
         })
     }
   
 })

 //@route GET /api/profile/all
//@desc Get All profile
//@access public

const getAllProfile = asyncHandler(async(req,res)=>{
    
   const profile = await Profile.find({}).populate('User',['name','avatar'])

   if(profile){
       res.send(profile)
   }
   else{
       res.status(404)
        res.json({
            message:'Profile Not Found'
        })          
   }


})

//@route GET /api/profile/:slug
//@desc Get Profile with slug
//@access public

const getProfileWithSlug = asyncHandler(async(req,res)=>{
    
    const profile = await Profile.find({slug:req.params.slug}).populate('User',['name','avatar'])
 
    if(profile){
        res.send(profile)
    }
    else{
        res.status(404)
        // res.json({message:'No Profile Found'})
        throw new Error ('Profile Not Found')         
    }
 })

//@route PUT /api/profile/addExperience
//@desc Update User Profile To Add Experience
//@access private

const updateProfileToAddExperience = asyncHandler(async(req,res) =>{

   
     const profile = await Profile.findOne({user:req.user._id})

     if(profile){
         
           profile.experience.unshift(req.body)
        
          const updateProfile = await profile.save()
          
          if(!updateProfile){
              res.status(404)
              res.json({message:'Not Found'})
          }
          res.send({
              updateProfile
          })

        } 
     else{
         res.status(404)
         res.json({
             message:'No Profile Found'
         })
     }
   
 })

//@route PUT /api/profile/addEducation
//@desc Update User Profile To Add Education
//@access private

const updateProfileToAddEducation = asyncHandler(async(req,res) =>{

   
    const profile = await Profile.findOne({user:req.user._id})

    if(profile){
        
          profile.education.unshift(req.body)
       
         const updateProfile = await profile.save()
         
         if(!updateProfile){
             res.status(404)
             res.json({message:'Not Found'})
         }
         res.send({
             updateProfile
         })

       } 
    else{
        res.status(404)
        res.json({
            message:'No Profile Found'
        })
    }
  
})

 
export {testRoute,getCurrentProfile,createProfile,updateProfile,getAllProfile,getProfileWithSlug,updateProfileToAddExperience
,updateProfileToAddEducation}
