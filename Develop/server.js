const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const routeToNotes = require("./routes/notes");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// directs to routes file
app.use('/api', routeToNotes);

app.use(express.static("public"));

// GET  route for index.html -- serves static html file
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET route for notes.html -- serves static html file
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening to http://localhost:${PORT}`)
);