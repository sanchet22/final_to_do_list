const express = require("express");
const uuid = require("uuid");
const app = express();
const cors = require("cors");
const router = express.Router();
const db = require("./src/db");
const tasksRouter = require("./src/routes/tasks");

const PORT = 3000;

app.use(express.json());
app.use(cors());

// We have to use DB
// const todos = [
//   {
//     id: 1,
//     name: "Catch Jirachi",
//     completed: true,
//   },
//   {
//     id: 2,
//     name: "Catch Celebi",
//     completed: false,
//   },
//   {
//     id: 3,
//     name: "Catch Charizard",
//     completed: true,
//   },
// ];

// app.get("/", (req, res) => {
//   res.json({ msg: "Todo List Home Page" });
// });
app.use(express.json());
app.use("/api/", tasksRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the To-Do List API");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  let task = tasks.filter((todo) => task.id == req.params.id);
  res.json({ msg: "1 task", data: task });
});

// GET, POST, PUT, DELETE, PATCH
app.post("/tasks", (req, res) => {
  console.log(req.body);
  todos.push({ id: uuid.v4(), ...req.body });
  res.json({ msg: "Add Todo", data: todos });
});

app.put("/tasks/:id", (req, res) => {
  console.log(req.body,"req");
  let task = tasks.find((task) => task.id == req.params.id);
  if (task) {
    tasks.task = req.body.task;
    todo.completed = req.body.completed;
    res.json({ msg: "Edit Todo", data: tasks });
  } else {
    res.json({ msg: "Todo not found." });
  }
});

app.delete("/todos/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json({ msg: "Delete Todo", data: todos });
});

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
