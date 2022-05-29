const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "todonl",
});

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  let sqlSelect = "SELECT id,title,task,date FROM tasks";

  db.query(sqlSelect, (err, result) => {
    return res.send(result);
  });
});

app.post("/tasks/post", (req, res) => {
  const { title } = req.body;
  const { task } = req.body;
  const { date } = req.body;

  let sqlInsert = "INSERT INTO tasks(title,task,date) VALUES (?,?,?)";

  db.query(sqlInsert, [title, task, date], (err, result) => {
    return res.send(result);
  });
});

app.delete("/tasks/delete/:id", (req, res) => {
  const { id } = req.params;

  let sqlDelete = "DELETE FROM tasks WHERE id = ?";

  db.query(sqlDelete, id, (err, result) => {
    return res.send(result);
  });
});

app.put("/tasks/update", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { task } = req.body;
  const { date } = req.body;

  let sqlUpdate = "UPDATE tasks SET title = ?,task = ?,date = ? WHERE id = ?";

  db.query(sqlUpdate, [title, task, date, id], (err, result) => {
    return res.send(result);
  });
});

app.listen(3001);
