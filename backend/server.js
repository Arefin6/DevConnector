 import express from 'express';
 import dotEnv from 'dotenv';
 import bodyParser from 'body-parser';
import connectDb from './config/db.js';
import userRoute from './routes/userRoutes.js'
import postRoute from './routes/postRoute.js'
import profileRoute from './routes/profileRoutes.js'


dotEnv.config()
connectDb()
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('Hello Arefin');
})

app.use('/api/users',userRoute)
app.use('/api/profile',profileRoute)
app.use('/api/posts',postRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }



const port = process.env.PORT || 5000;

app.listen(port,console.log(`Listening on port ${port}`))