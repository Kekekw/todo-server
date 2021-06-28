const TODOS = [
  {
    id: 1,
    description: "Faire les courses",
    memo: "Pomme, poire, lessive",
    priority: 1,
    updated_at: Date.now(),
  },
  {
    id: 2,
    description: "Envoyer le courrier",
    memo: "Urgent",
    priority: 2,
    updated_at: Date.now(),
  },
];

let id = 3;

/*
 * GET todo list.
 */
exports.findAll = function (_req, res) {
  res.status(200).json(TODOS);
};

/*
 * POST Create a todo.
 */
exports.addTodo = function (req, res) {
  const todo = { id: id++, ...req.body, updated_at: Date.now() };
  TODOS.push(todo);
  res.status(201).end();
};

/*
 * DELETE a todo
 */
exports.deleteTodo = function (_req, res) {
  res.status(404).json("Not found");
};
