console.log("Yo.. JS")

async function main(){
    let a= await fetch ("C:/Users/asus/OneDrive/Desktop/CODE/WEB_DEV/tut84-spotify/public/songs/")
    let response = await a.blob();
    console.log(response);
}

main()
