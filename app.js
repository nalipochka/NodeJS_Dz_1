


// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const fullUrl = `${parsedUrl.protocol}//${req.headers.host}${parsedUrl.pathname}${parsedUrl.search}`;
//   console.log('Полный путь:', fullUrl);

//   res.end('Полный путь: ' + fullUrl);
// });

// server.listen(3000);
// console.log('Сервер запущен на порту 3000');

var adr = 'http://localhost:8080/default.html?year=2017&month=february';
const parseUrl = new URL(adr);

const host = parseUrl.host;
const path = parseUrl.pathname;
const params = parseUrl.searchParams;
console.log(`Host: ${host}`);
console.log(`Path: ${path}`);
console.log("GET parameters:");
// for (let [key, value] of params) {
//     console.log(\t${key}: ${value});
// }
params.forEach((key,value)=>{
    console.log(`\t${key}: ${value}`);
});