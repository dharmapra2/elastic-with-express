const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("@elastic/elasticsearch");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const esClient = new Client({ node: "https://localhost:9200" });

app.get("/", (req, res) => {
  console.log("hi");
  res.json({ msg: "Hello Elastic Node Express!", data: esClient });
});
app.get("/hi/34", (req, res) => {
  console.log("987 8765");
  res.json({ msg: "hi oiuyg!", data: esClient });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
