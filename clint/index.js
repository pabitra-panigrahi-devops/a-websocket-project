const express = require("express");
const WebSocket = require("ws");

const app = express();
const PORT = 8000;


app.get("/about", (req, res) => {
  res.send("About Page");
});


const server = app.listen(PORT, () => {
    console.log(`Server is running ........`);
});
const wss = new WebSocket.Server({ server });

 wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log(`data from client: ${data}`);
        ws.send(`thanks for your message: ${data}`);
    });
});