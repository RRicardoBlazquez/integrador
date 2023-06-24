"use strict";

const { default: axios } = require("axios");

const url = "https://rickandmortyapi.com/api/character/";

let utils = {};

utils.getCharById = function (res, id) {
  //let personaje = {};
  axios(`${url}${id}`)
    .then(({ data }) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({ message: err }));
    });
};

module.exports = utils;
