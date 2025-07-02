console.log("harry")
let b=document.getElementsByClassName("box");
console.log(b)
b[2].style.backgroundColor ="aqua"
// document.getElementById("blue").style.backgroundColor="black"
document.querySelector(".box").style.backgroundColor="green"// 1st matching ele

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="purple";
// })// 1st matching ele
e=document.getElementsByTagName("div")

console.log(e[2].matches(".box"))
console.log(e[3].closest("#blue"))// searches from this node to all acncestors