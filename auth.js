const {Router} = require('express')
const router = Router()

router.post('/register', async(req,res)=>{
   console.log(req.body)
})
router.post('/login', async(req,res)=>{
   console.log(req.body)
})
module.exports = router