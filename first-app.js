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
  console.log('ankit')
});

server.listen(4000)