
const randomDelay = ()=>{
    return new Promise ((resolve,reject) =>{
        time =1+Math.random()*5;
        setTimeout(()=>{
            resolve();
        },time*1000)
    })
}
    
    const addItem = async(item)=> {
        await randomDelay();
        let div = document.createElement("div");
        div.innerHTML =item;
        document.body.append(div);

    }

async function main(){

    let t = setInterval(()=>{
        let last = document.body.lastElementChild;
        
        if(last.innerHTML.endsWith(". . .")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-5)
        }
        else last.innerHTML=last.innerHTML+ " ."

    },200)

    let arr = ["Initialising Hacking " , "Reading Your Files" , "Password files detected" ,"Sending all passwords and personal files to server ", "Cleaning up "]


    for (const item of arr) {
           await addItem(item)
        }
    await randomDelay()
    clearInterval(t)

}

main()