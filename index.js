const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors());
const language = require("./data/languages.json");
//update
app.get("/", (req, res) => {
  res.send("look mama!");
});

app.get("/language", (req, res) => {
  res.send(language);
});

app.get("/language/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("looking for id for", id);
  const languages = language.find((ph) => ph.id === id);
  res.send(languages);
});

app.listen(port, () => {
  console.log(`language learning server`);
});
