// server/index.js

const express = require("express");
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});