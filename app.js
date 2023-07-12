const express = require("express");
const app = express();
const path = require("path");


app.get("/", (req, res) => {
    //res.sendFile("/home/diego/Escritorio/web-node/index.html")
    //res.sendFile(path.join(__dirname + "/index.html"));
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("server corriendo en el puerto", 3000);
});