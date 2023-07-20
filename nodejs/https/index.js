require("dotenv/config");

const express = require("express");

const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("ping server successfully")
});

const options = {
    key: fs.readFileSync(path.resolve("https.key")),
    cert: fs.readFileSync(path.resolve("https.crt"))
};

const port = 8443;

https.createServer(options, app).listen(port, () => {
    console.log(`Aplicação sendo executada na porta ${port}`);
});
