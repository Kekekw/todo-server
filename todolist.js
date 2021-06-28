const express = require("express");
const todo = require("./routes/todo");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const errorHandler = require("errorhandler");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(errorHandler());

app.get("/api/todos", todo.findAll);
app.post("/api/todos", todo.addTodo);

app.delete("/api/todos/:id", todo.deleteTodo);

// app.put('/api/todos/:id', todo.updateTodo);
// app.get('/api/todos/:id', todo.findById);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
