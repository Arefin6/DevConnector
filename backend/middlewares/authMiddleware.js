import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = asyncHandler(async(req,res,next)=>{
   
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

       try {
         
        token = req.headers.authorization.split(' ')[1]

        const decode = jwt.verify(token,process.env.JWT_SECRET)
          
        req.user = await User.findById(decode.id).select('-password')

        next()


       } catch (error) {
          res.status(401)
          res.send(error.message)           
       }

    } 


    if(!token){
      res.status(401)
      res.json({message:"UnAuthorized Access"})  
    }


})

export {protect}
