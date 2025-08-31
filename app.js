const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs"); // set EJS
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = []; // store tasks in memory

// Home route
app.get("/", (req, res) => {
  res.render("index", { tasks: tasks });
});

// Add new task
app.post("/add", (req, res) => {
  tasks.push(req.body.task);
  res.redirect("/");
});

// Delete task
app.post("/delete", (req, res) => {
  const index = tasks.indexOf(req.body.task);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
