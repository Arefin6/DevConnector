 import express from 'express';
 import dotEnv from 'dotenv';
import connectDb from './config/db.js';
import userRoute from './routes/userRoutes.js'
import postRoute from './routes/postRoute.js'
import profileRoute from './routes/postRoute.js'


dotEnv.config()
connectDb()
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello Arefin');
})

app.use('/api/users',userRoute)
app.use('/api/profile',profileRoute)
app.use('/api/posts',postRoute)


const port = process.env.PORT || 5000;

app.listen(port,console.log(`Listening on port ${port}`))