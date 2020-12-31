import express from 'express'

const router = express.Router();

//@route Get /api/profile/Test
//@desc Tet route
//@access public

router.get('/test',(req,res) =>{
    res.send({message:'profileRoute Works'})
})

export default router