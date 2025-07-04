// function getData(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         } , 3000);
//     })
// }
// console.log("Loding modules");

// console.log("doing something")

// console.log("load data");
// let data  = getData(); // promise that 

// // data.then((v)=>{
    // //     console.log(data);
    // //     console.log("processing data")
    // //     console.log("task 2");
    // // })// way 1
    
    // console.log(data);
    // console.log("process happening")
    
    
    
    async function getData(){
        
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455);
        } , 3000);
    })
}


async function main(){
    console.log("Loding modules");
    
    console.log("doing something")
    console.log("load data");
    let data  = await getData(); // promise that 
    
    console.log(data);
    console.log("process happening");
    console.log("Done")
}
main()
