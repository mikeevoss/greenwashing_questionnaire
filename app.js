const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const shortId = require("shortid");
const sendMail = require("./sendMail");

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/write/:message", function(req, res) {
  const { message } = req.params;
  handleButtonPress({ message, filename: "result" });
  res.send(message);
});

app.post("/write/responses", function(req, res) {
  const file = `${__dirname}/output/responses.json`;
  var responses = JSON.parse(fs.readFileSync(file, "utf8"));
  const id = shortId();
  const newResponses = { ...responses };
  newResponses[id] = req.body;
  fs.writeFileSync(file, JSON.stringify(newResponses));
  res.send({ id });
});

app.post("/email", function(req, res) {
  sendMail(req.body);
  res.send({ message: "Succes!" });
});

const handleButtonPress = ({ message, filename }) => {
  fs.writeFile(`${__dirname}/output/${filename}`, message, err => {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
};

app.listen(4000, function() {
  console.log("listening on *:4000");
});
