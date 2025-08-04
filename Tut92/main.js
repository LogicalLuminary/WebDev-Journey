const express= require('express')
const app = express()
const port  = 3000

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    // res.send("Hell0 World");
    let name = "addidas"
    let text = "Searc h nOw"
    // res.sendFile("Templets/index.ejs",{root : __dirname})
    res.render("index",{name:name,text:text})
})

// app.get('/:slug',(req,res)=>{ 
//     // for diff slug i have to write it many times. So use template engines like ejs
//     let name = "addidas"
//     let text = "Searc h nOw"
//     res.render("blogpost",{name:name , text:text})
// })


app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})

