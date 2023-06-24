"use strict";
const http = require("http");
const exercisesUtils = require("../src/controllers/getCharById");
const PORT = 3001;

http
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
  .listen(PORT, "localhost");
