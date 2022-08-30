const Author = require("../models/author.model");

function createNewAuthor(req, res) {
  Author.create({
   name: req.body.name,
  }).then(() =>
      res.json({ message: "Your Author has been created successfully" })
    )
    .catch((err) =>
      res.json({ error: true, message: "Failed to create Author" })
    );
}


function getAllAuthors(req, res) {
  Author.find({})
    .then((allAuthors) => res.json( allAuthors ))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
}


function deleteById(req, res) {
  Author.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function find(req, res) {
  Author.findOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function update(req, res) {
  Author.updateOne({
    name: req.body.name,
  })
    .then(() =>
      res.json({ message: "Your Author has been updated successfully" })
    )
    .catch((err) => res.json(err));
}

module.exports = {
  getAllAuthors,
  createNewAuthor,
  deleteById,
  find,
  update,
};
