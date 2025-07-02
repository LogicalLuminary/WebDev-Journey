let o1= {
    1:"crazy",
    2:"Amazing"
}
let o2={
    1:"Engine",
    2:"Foods"
}

if(Math.random() <0.5){
    console.log(o1[1]);
}
else console.log(o1[2])

Math.random() <0.5 ? console.log(o2[1]) : console.log(o2[2]);