import fs from "fs/promises"

let a = await fs.readFile("harry.txt")
console.log(a.toString())
let b = await fs.writeFile("harry.txt", "\n\n\n this is amazing promise")

let c = await fs.readFile("harry.txt")
console.log(c.toString())