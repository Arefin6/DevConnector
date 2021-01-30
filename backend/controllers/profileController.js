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
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        // spread the rest of the fields we don't need to check
        ...rest
      } = req.body;

      const socialFields = {  twitter,facebook,linkedin,youtube,instagram };

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
          social:socialFields,
         ...rest
    });

    if(createdProfile){
        res.status(201).json(createdProfile)
    }
    else{
        res.status(500)
        res.json({message:"something went wrong"})
    }

   
 })


//@route PUT /api/profile
//@desc Update User Profile
//@access private

const updateProfile = asyncHandler(async(req,res) =>{
    const {
        company,
        website,
        location,
        status,
        skills,
        bio,
        githubUsername,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        // spread the rest of the fields we don't need to check
        ...rest
      } = req.body;

      const socialFields = {  twitter,facebook,linkedin,youtube,instagram };
    
    // normalize social fields to ensure valid url
    for (const [key, value] of Object.entries(socialFields)) {
      if (value && value.length > 0)
        socialFields[key] = normalize(value, { forceHttps: true });
    }

     const profile = await Profile.findOne({user:req.user._id})

     if(profile){
          profile.website = normalize(website, { forceHttps: true })||profile.website
          profile.skills =  Array.isArray(skills)
          ? skills
          : skills.split(',').map((skill) => ' ' + skill.trim())||profile.skills
          profile.social = socialFields||profile.social
          profile.company = company||profile.company
          profile.location = location||profile.location
          profile.status = status||profile.status
          profile.bio = bio||profile.bio
          profile.githubUsername = githubUsername||profile.githubUsername

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
    
    const profiles = await Profile.find({}).populate('user', 'name avatar')

   if(profiles){
       res.send(profiles)
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

const getProfileByUserId = asyncHandler(async(req,res)=>{
    
    const profile = await Profile.findOne({user:req.params.userId}).populate('user','name avatar')
 
    if(!profile){
        res.status(404)
        res.json({message:'No Profile Found'})
      
    }
    else{
       
        res.send(profile)          
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



//@route DELETE /api/profile/:exp_id/delete
//@desc  Delete exp from user profile
//@access private

const deleteExperience = asyncHandler(async(req,res) =>{

   
    const foundProfile = await Profile.findOne({user:req.user._id})

    if(foundProfile){
        
          foundProfile.experience = foundProfile.experience.filter(exp => exp._id.toString() !== req.params.exp_id)
       
         const updateProfile = await foundProfile.save()
           res.send(updateProfile)

       } 
    else{
        res.status(404)
        res.json({
            message:'No Profile Found'
        })
    }
  
})


//@route DELETE /api/profile/:exp_id/delete
//@desc  Delete exp from user profile
//@access private

const deleteEducation = asyncHandler(async(req,res) =>{

   
    const foundProfile = await Profile.findOne({user:req.user})

    if(foundProfile){
        
          foundProfile.education = foundProfile.education.filter((edu) => edu._id.toString() !== req.params.edu_id);
           
           const updatedProfile = await foundProfile.save();

          res.status(200).send(updatedProfile)

       } 
    else{
        res.status(404)
        res.json({
            message:'No Profile Found'
        })
    }
  
})

    
    

 
export {testRoute,getCurrentProfile,createProfile,updateProfile,getAllProfile,getProfileByUserId,updateProfileToAddExperience
,updateProfileToAddEducation,deleteExperience,deleteEducation}
