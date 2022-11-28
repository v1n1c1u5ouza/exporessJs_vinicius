const express = require("express");
const server = express();

server.use(function (requ, res, next) {
  console.log("Inicio...");
  next();
  console.log("Fim....");
});

server.use(function (req, res) {
  console.log("Resposta...");
  res.send("<h1>API</h1>");
});

server.listen(3000, () => console.log("Exucutando...."));

//diferenca entre use e get: use vai rodar os codigos independe da url já o get só vai usar a url especifca