const http = require("http");
const fs = require("fs");


const Myown = http.createServer((req, res )=>{
     res.end("Hello this is page")
})