import express from 'express'

const router = express.Router();

//@route Get /api/posts/Test
//@desc Tet route
//@access public
router.get('/test',(req,res) =>{
    res.send({message:'postRoute Works'})
})


export default router