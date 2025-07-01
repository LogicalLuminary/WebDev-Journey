var a=4;//global scope
var r3 = 34.2
console.log(a+r3+1)
console.log(typeof a, typeof r3)

const pi = 3.1415;// cant change 
console.log(typeof pi)

let q=0;
// local scope

let o={
    name:"Amrit",
    "kaam":"",
    paisa :-12345678900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*-1
}
console.log(o);//no

for (const key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
        const element = o[key];
    }
}

for (const element of "nvpojs") {
    console.log(element)
}
// repl 
// ===

