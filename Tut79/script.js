try {
let a= parseInt(prompt("Enter 1st no."))
let b= parseInt(prompt("Enter 2nd no."))
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid inputs");
}


    console.log("sum is ",a+b);
}
catch(error){
    console.log("Error aagrya oii")
}
finally{
    console.log("Files being colsed")
}// used in fn , coz finally works even after returning the fn .

