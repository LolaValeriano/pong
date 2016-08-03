var http= require("http");
var fs = require("fs");

http.createServer (function (request, response){
    
    fs.readFile("index.html", function (err,data){
     if (err){
           response.write(404);
           response.end(JSON.stringify(err));
           return;
          }
          
        response.writeHead(200);
        response.end(data);  
    });
}).listen (8080);




//Console vai imprimir a mensagem abaixo:
console.log('Server running at http://127.0.0.1:8080/');