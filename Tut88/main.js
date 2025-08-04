// // content require get server 
// // let http = require('node:http');
// import http from "http"
// const hostname ='127.0.0.1';
// const port =3010;

// const serv = http.createServer(( req,res)=>{
//     res.statusCode =200;
//     res.setHeader('content-type','text/html');
//     res.end("<h1>Hel nge rle fs  aas</h1>");
// })

// serv.listen(port,hostname,()=>{
//     console.log(`Server renning at http://${hostname}:${port}/`);
// })

// // const os = require('os');
// // console.log(os.platform());
// // console.log(os.type())

// // const fs =require("fs"); // use to import


const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello Wor ld 2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/contact/1',(req,res)=>{
    res.send("Hello contact me !!!")
})
app.get('/contact/2',(req,res)=>{
    res.send("Hello contact me2 !!!")
})

// if many -> unmanagable code 

app.get('/contact/:slug',(req,rse)=>{
    console.log(req)
    rse.send(`hello ${req.params.slug} `)

})