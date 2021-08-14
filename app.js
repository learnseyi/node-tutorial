const http = require('http');
const os = require('os');
const fs = require('fs')
const names = require('./names')
const util = require('util')
const amount = 9;
const result = amount < 10 ? `small number ${names.peter}` : `large number ${names.James}`;
// console.log(os.userInfo())
const upTime = os.uptime()

fs.writeFileSync('./fs.txt',`this is a test,\n'this is a test \n`,{flag:'a'})
const readFilePromise = util.promisify(fs.readFile)
// const getData = ()=>{
//   return new Promise((resolve,reject)=>{
//     const data = fs.readFile('./fs.txt','utf8',(err,data)=>{
//       !err ? resolve(data) : reject('There was an error')
//     })
//
//   })
// }

const server = http.createServer((req,res)=>{
   // getData().then(info => res.end(info)).catch(err =>res.end(err.message))
   const data = async()=>{
     try{
       const t = await readFilePromise('./fs.txt','utf8')
       // const info = await t
       res.end(t)
      
     }catch(err){console.log(err)}
   }
   data()

})

server.listen('5000',()=>{
  console.log('server is listening on port 5000')
})
