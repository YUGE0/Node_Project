//Date 01-10-23
//setInterval(()=>{console.log("hello world")},1000)
// const Hey = ((name)=>{
//     console.log("Hello "+name)
//     //or
//     console.log(`Hello ${name}`)
// })
// Hey("yug")

//Date 04-10-23
//as below line will work as import statment which brings content from other file  
// const name = require("./NewFile");
// const hey = require("./utils");
// console.log(name)
// console.log(name.person)
// hey("elio")

//Date 14-10-23
// const os = require('os')
// const user = os.uptime()
// console.log(user)
// const currentOs = {
//     name : os.type(),
//     relese : os.release(),
//     totalmem : os.totalmem(),
//     freemem : os.freemem()
// }
//console.log(currentOs)

// const path = require('path')
// console.log(path.resolve(__filename,"Main.java"))

//read the fileSync 
// const { readFileSync , writeFileSync } = require('fs')
// const first = readFileSync("./Text/Read.txt", "utf-8")
// console.log(first)
// writeFileSync("./Text/Writer.txt", first)
// const w = readFileSync("./Text/Writer.txt", "utf-8")
// console.log(w)

//Async file 
// const {readFile,writeFile} = require('fs')
// readFile("./Text/Read.txt","utf-8",(er,re) => {
//     if(er){
//         console.log(er)
//         return
//     }
//     const read = re;
//     readFile("./Text/Writer.txt","utf-8",(er,re)=>{
//         if(er){
//             console.log(er)
//             return
//         }
//         const write = re;
//         writeFile("./Text/Result.txt","Here is the new content"+read+write,(er,re)=>{
//             if(er){
//                 console.log(er)
//                 return
//             }
//             console.log(re)
//         })
//     })
// })

//HTTP
// const http = require("http")
// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//     res.end("Welcome")
//     }
//     if(req.url === "/about")
//     {
//         res.end("the history of web is wide")
//     }
// })

// server.listen(9099)

console.log("Hey There")




































// const n = 15

// if(n>10){
//     console.log("number is bigger")
// }
// else{
//     console.log(`number is smaller`)
// }

// console.log('First node app')

