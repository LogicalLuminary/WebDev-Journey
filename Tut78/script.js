async function call() {
    
  const result = await new Promise((resolve) =>{
    r = floor(Math.random() * 3);
    setTimeout(() => resolve(), r)
});


}
