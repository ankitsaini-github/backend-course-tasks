// refresh-----------------
// console.log("Hello World!");
// let multiply = (a,b) => a * b;
// console.log(multiply(5, 5));
// let student = {
//   name: "ankit",
//   branch: "cse",
// };
// console.log(student);
// let fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// fruits = fruits.map(i=>{
//   return i===' '? 'empty string':i;
// })
// console.log(fruits)

const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers)
  // process.exit();

  const url=req.url;
  
  if(url==='/home'){
    res.write('<html>')
    res.write('<head><title>first app</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url==='/about'){
    res.write('<html>')
    res.write('<head><title>first app</title></head>')
    res.write('<body><h1>Welcome to about us page</h1></body>')
    res.write('</html>')
    return res.end();
  }
  if(url==='/node'){
    res.write('<html>')
    res.write('<head><title>first app</title></head>')
    res.write('<body><h1>Welcome to node js project</h1></body>')
    res.write('</html>')
    return res.end();
  }
  
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>first app</title></head>')
  res.write('<body><h1>first page</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(4000)