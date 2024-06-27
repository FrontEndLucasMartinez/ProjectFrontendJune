const app = require("express");
const app = express();
const port = 3333;
app.use('./backend', require('./backend/server.js'));
app.listen(port, () =>{
    console.log("servidor rodando na porta${port}")
});
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
