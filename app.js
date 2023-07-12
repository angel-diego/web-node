const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile("/home/diego/Escritorio/web-node/index.html")
});

app.listen(3000, () => {
    console.log("server corriendo en el puerto", 3000);
});