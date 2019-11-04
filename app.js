const express = require("express");
const app = express();
const port = 5678;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hello", (req, res) => res.send("Hello World Again!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app
