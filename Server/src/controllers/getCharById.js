"use strict";

const { default: axios } = require("axios");

const url = "https://rickandmortyapi.com/api/character/";

const getCharById = function (req, res) {
  const { id } = req.params;
  axios(`${url}/${id}`)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender, error } = data;
      const character = { id, status, name, species, origin, image, gender };
      return name
        ? res.status(200).json(character)
        : res.status(404).json({ message: error });
    })
    .catch((reason) => {
      res.status(500).json({ message: reason });
    });
};

module.exports = getCharById;

/* utils.getCharById = function (res, id) {
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
}; */
