const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all tasks
router.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new task
router.post("/tasks", (req, res) => {
  const { task } = req.body;
  db.query("INSERT INTO tasks (task) VALUES (?)", [task], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, task, completed: false });
  });
});

// Delete a task
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Task deleted" });
  });
});

// Update task completion status
router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { task,completed } = req.body;
  console.log(req.body,"reqbody")
  db.query(
    "UPDATE tasks SET task = ?, completed = ? WHERE id = ?",
    [task, completed, id],
    (updateErr) => {
      if (updateErr) {
        return res.status(500).json({ error: "Failed to update task" });
      }
      res.json({ message: "Task updated successfully" });
    }
  );
});

module.exports = router;
