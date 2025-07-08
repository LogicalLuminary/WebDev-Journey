console.log("Yo.. JS")

async function main(){
    let a= await fetch ("C:\Users\asus\OneDrive\Desktop\CODE\WEB_DEV\tut84-spotify\songs\videoplayback.m4a")
    let response = await a.blob();
    console.log(response)
}

main()