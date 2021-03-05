
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const envfile_stage = process.env.NODE_ENV ? '.'+process.env.NODE_ENV : '';
dotenv.config(
  {
    path: path.join(__dirname + `/.env${envfile_stage}`),
    debug: process.env.DEBUG
  }
);
if (dotenv.error) {
  throw dotenv.error
}
console.log("PATH DIRNAME : ", path.join(__dirname + `/.env${envfile_stage}`))


const { json, urlencoded } = express;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const router = require("./routes");
app.use(router);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//const serverless = require('serverless-http');
//module.exports.handler = serverless(app);

// Access
// http://localhost:8080/hello/es
