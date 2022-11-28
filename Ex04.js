const express = require("express");
const server = express();

server
  .route("/clientes")
  .get((req, res) => res.send("Lista de Clientes"))
  .post((req, res) => res.send("Novo de Clientes"))
  .put((req, res) => res.send("Alterar de Clientes"))
  .delete((req, res) => res.send("Excluir de Clientes"));

server.listen(3000, () => console.log("Exucutando...."));
