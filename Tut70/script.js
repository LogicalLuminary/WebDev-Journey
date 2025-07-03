let o = {
    c1: Math.floor(Math.random() * 256),
    c2: Math.floor(Math.random() * 256),
    c3: Math.floor(Math.random() * 256)
};



console.log(o[2])
let c=document.getElementsByClassName("box")
Array.from(c).forEach(e=>{
    e.style.backgroundColor= `rgb(${o.c1},${o.c2},${o.c3})`;
})
console.log(c)
