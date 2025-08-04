

const express = require('express')
const blog = require('./routes/blog')// blog thing handel by other file content
// const { template } = require('lodash')
const app = express()
const port = 3000
app.use(express.static('public'))


app.get('/',(req,res)=>{// basic querries 
    console.log("its get")
    res.send("Hello World2!");
})

app.post('/',(req,res)=>{
    console.log("its post")
    res.send("Hello again")
})
app.get('/index',(req,res)=>{
    console.log("sending html file")
    // res.sendFile("C:/Users/asus/OneDrive/Desktop/CODE/WEB_DEV/Tut89/public/Templets/index.html")
    res.json({a:1,b:2,c:4}) 
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})




