const os = require('os')
const fs = require('fs')

console.log(os.platform())
console.log(os.arch())
console.log(os.homedir())
console.log(__dirname) //---> give current folder path
console.log(__filename) //current file path

fs.readFile('notes.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
}) 

fs.writeFile('newpage.txt','Razeen Mohamed Rasheed',(err)=>{
    if(err) throw err;
    console.log("success")
})

fs.appendFile('newpage.txt','razeenrasheed83@gmail.com',(err)=>{
    if(err) throw err;
    console.log("success")
})