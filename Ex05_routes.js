const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  const init = Date.now();
  next();
  console.log(`tempo = ${Data.now() - init} ms.`);
});

router.get("/produtos/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Caneta" });
});

router.get("/clientes/:id", (req, res) => {
  res.json({ id: req.params.id, name: "João" });
});

module.exports = router;
