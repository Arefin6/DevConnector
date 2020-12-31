import mongoose from 'mongoose';

const connectDb = async() =>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI,{

          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true
      })
      console.log('Mongo Db Connected')

        
    } catch (error) {
       console.log(error)
       process.exit(1) 
    }
}
export default connectDb