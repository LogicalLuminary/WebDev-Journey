const express  = require('express')
const app = express()
const port =3000
const fs = require("fs")
app.use(express.static("public"))// one of inbuilt middle ware 


// const myLog = function (req,res,next){
//     console.log("Loggedd")
//     next() // next is done for nex
// }
// app.use(myLog)


// middleware for all ntype of req 
app.use((req,res,next)=>{
    console.log(req.header)
    req.harry = "54"
    // console.log('m1')
    fs.appendFileSync('logs.txt',`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method} `)


    next() 
})


app.get('/',(req,res)=>{
    res.send("Hello World!!"+req.harry)
})
app.get('/about',(req,res)=>{
    res.send("Hello about~!")
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})