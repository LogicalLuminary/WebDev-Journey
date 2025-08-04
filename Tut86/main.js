// content require get server 
// let http = require('node:http');
import http from "http"
const hostname ='127.0.0.1';
const port =3000;

const serv = http.createServer(( req,res)=>{
    res.statusCode =200;
    res.setHeader('content-type','text/html');
    res.end("<h1>HelloWoelngerlefsaas</h1>");
})

serv.listen(port,hostname,()=>{
    console.log(`Server renning at http://${hostname}:${port}/`);
})

// const os = require('os');
// console.log(os.platform());
// console.log(os.type())

// const fs =require("fs"); // use to import

