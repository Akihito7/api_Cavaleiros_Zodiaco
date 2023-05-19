const express = require("express");

const app = express();

const path = require("path");

const cors = require("cors");

app.use(express.json());

app.use(cors());

const routes = require("./routes");

app.use("/files", express.static( path.resolve(__dirname, "public")));

app.use(routes);

const PORT = 7777;

app.listen(PORT,() => console.log(`server is running on port ${PORT}`));