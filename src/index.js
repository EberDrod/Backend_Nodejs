var http = require("http");
var url = require("url");
var querystring = require("querystring");
//Mandar llamar importaciones
var log = require("./modules/my-log");
var consts = require("./utils/consts");
var firabese = require("../libs/firebase");
//IMportar countries
var { countries } = require("countries-list");

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url);
  console.log("parsed", parsed);

  var pathname = parsed.pathname;

  var query = querystring.parse(parsed.query);
  console.log("query", query);

  if (pathname === "/") {
    response.writeHead(200, { Content_type: "text/html" });
    response.write("<html><body><p>HOME</p></body></html>");
    response.end();
  } else if (pathname === "/exit") {
    response.writeHead(200, { Content_type: "text/html" });
    response.write("<html><body><p>BYE</p></body></html>");
    response.end();
    //Cambiar conuntry xINFO
  } else if (pathname === "/info") {
    //Variable URL
    var result = log.info(pathname);
    response.writeHead(200, { Content_type: "text/html" });
    response.write(result);
    response.end();
    //Consultar country list
  } else if (pathname === "/country") {
    //Variable URL
    var result = log.info(pathname);
    response.writeHead(200, { Content_type: "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else if (pathname === "/error") {
    var result = log.error(pathname);
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
