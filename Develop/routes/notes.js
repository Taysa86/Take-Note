const notes = require('express').Router();
const {uuid} = require("uuidv4");

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");

//GET request
notes.get("/notes", (req, res) =>
    readFromFile("./db/db.json").then((data) => 
    res.json(JSON.parse(data)))
);

//Post request
// localhost:3001/api/notes
notes.post("/notes", (req,res) => {
    const {title, text} = req.body;
    if (req.body) {
        const newPost = {
            title,
            text,
            id: uuid(),

        };

        readAndAppend(newPost, "./db/db.json");

        res.json('New post succesful!');
    } else {
        res.error('Error in posting');
    }
});


module.exports = notes;