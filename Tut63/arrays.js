// let arr =[1,2,"34","amc"]
// // console.log(arr.length)
// // console.log(arr);

// // strings are immutable
// // arr mutable

// let s="amrit";
// s[1]='4';
// console.log(s)// not changed
// // console.log(arr.toString())

// arr.pop()
// arr.push(12)
// console.log(arr)

a=[1,2,5,3,2]
b=a.filter(
    (e=>{
        if(e>=3)return true;
        return false;
    })
)
console.log(b)