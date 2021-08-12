const http = require('http');
const os = require('os');
const fs = require('fs')
const names = require('./names')
const amount = 9;
const result = amount < 10 ? `small number ${names.peter}` : `large number ${names.James}`;
// console.log(os.userInfo())
const upTime = os.uptime()

fs.writeFileSync('./fs.txt',`this is a test,\n'this is a test \n`,{flag:'a'})

const server = http.createServer((req,res)=>{
  res.end('God has done it again')
})

server.listen('5000',()=>{
  console.log('server is listening on port 5000')
})
