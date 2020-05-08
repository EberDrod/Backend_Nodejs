var http = require("http");
//Mandar llamar importaciones
var log = require("./modules/my-log");
var consts = require("./utils/consts");
var firabese = require("../libs/firebase");
//IMportar countries
var { countries } = require("countries-list");

var server = http.createServer(function (request, response) {
  if (request.url === "/") {
    response.writeHead(200, { Content_type: "text/html" });
    response.write("<html><body><p>HOME</p></body></html>");
    response.end();
  } else if (request.url === "/exit") {
    response.writeHead(200, { Content_type: "text/html" });
    response.write("<html><body><p>BYE</p></body></html>");
    response.end();
    //Cambiar conuntry xINFO
  } else if (request.url === "/info") {
    //Variable URL
    var result = log.info(request.url);
    response.writeHead(200, { Content_type: "text/html" });
    response.write(result);
    response.end();
    //Consultar country list
  } else if (request.url === "/country") {
    //Variable URL
    var result = log.info(request.url);
    response.writeHead(200, { Content_type: "application/json" });
    response.write(JSON.stringify(countries.MX));
    response.end();
  } else if (request.url === "/error") {
    var result = log.error(request.url);
    response.writeHead(200, { Content_type: "text/html" });
    response.write(result);
    response.end();
  } else {
    response.writeHead(404, { Content_type: "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
});

server.listen(4000);
console.log("Este server corre en el puerto 4000");

//No se les olvide investigar que es el comando grep & Kill-9
