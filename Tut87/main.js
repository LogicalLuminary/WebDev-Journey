const fs = require("fs")
console.log(fs)

console.log("starting")
// fs.writeFileSync("harry.txt" ,"aaha ooho")

fs.writeFile("harry2.txt","i am text of file",()=>{
    // code to go when write op has completed
    console.log("hogaya")
    fs.readFile("harry2.txt" , (error,data)=>{
        console.log(error,data.toString())
    })
});


fs.appendFile("harry.txt" , "harry_bhai_is_op",(e,d)=>{

})