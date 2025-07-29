const express = require("express");
const path = require("node:path");

const app = express();

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");


app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(8000);
