const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("@elastic/elasticsearch");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const esClient = new Client({
  node: "https://localhost:9200",
  auth: {
    username: "elastic",
    password: "txBxb3-0QO4R7-tFXvXqMKewt8",
    // apiKey: "el9YbllJb0JobmZjUFJiSUx3OG46ZEFLaFpNN3NRWDZGcFFZbGtmY01Ddw==",
  },
});
const result = esClient.search(
  {
    index: "test-message",
    query: {
      match: { hello: "world" },
    },
  },
  { meta: true }
);

console.log(result);

app.get("/", (req, res) => {
  console.log("hi");
  res.json({ msg: "Hello Elastic Node Express!", data: esClient });
});
app.get("/hi/34", (req, res) => {
  console.log("987 8765");
  res.json({ msg: "hi jhgf!", data: esClient });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
