"use strict";
const PORT = 3001;
const express = require("express");
const server = express();
const router = require("./routes/index");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

/* const http = require("http");
 */

/* http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").at(-1));
      exercisesUtils.getCharById(res, id);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Path not found" }));
    }
  })
  .listen(PORT, "localhost"); */
