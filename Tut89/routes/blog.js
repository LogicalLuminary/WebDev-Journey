const express = require('express')
const router = express.Router()

// a
// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('hello world')
})
router.get('/blog/:slug',(req,res)=>{
    console.log("working...")
    res.send(`fetch blog for ${req.params.slug}`)
})

module.exports = router