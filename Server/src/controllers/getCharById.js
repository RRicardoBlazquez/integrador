"use strict";

const { default: axios } = require("axios");

const url = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${url}/${id}`);
    const { status, name, species, origin, image, gender, error } = data;
    const character = { id, status, name, species, origin, image, gender };
    return name
      ? res.status(200).json(character)
      : res.status(404).json({ message: "character no found" });
  } catch (error) {
    res.status(500).json({ message: error.data });
  }
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
