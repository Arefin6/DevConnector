import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    text: {
        type:String,
        required:true
    },

    name:{
        type:String
    },
    avatar:{
        type:String
    },
    likes:[
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
              }   
        }
    ],
    comments:[
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
              },
             comment:{ 
              type:String,
              required:true
          },
      
          name:{
              type:String
          },
          avatar:{
              type:String
          },
          date:{
             type:Date,
             default:Date.now()
          }  
        }
    ]
 },
 {
     timestamps:true,
 },
 );

 const post = mongoose.model('Post',postSchema)

 export default post