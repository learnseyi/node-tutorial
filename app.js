const http = require('http');

const server = http.createServer((req,res)=>{
  res.end({
    name: 'seyi',
    age: 39
  })
}).listen(5000,()=>{
  console.log('server listening on port 5000')
})
