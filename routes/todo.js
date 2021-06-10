var todos = [
    {
        id : 1,
        description : "Faire les courses",
        memo : 'Pomme, poire, lessive',
        priority : 1,
        updated_at : Date.now()
    },
    {
        id : 2,
        description : "Envoyer le courrier",
        memo : 'Urgent',
        priority : 2,
        updated_at : Date.now()
    }
];

var id = 3;


/*
 * GET todos listing.
 */
exports.findAll = function(req, res){
    res.json(200, todos);
};

/*
 * Create a todo.
 */
exports.addTodo = function(req, res){
    var todo = req.body;
    // Put creation here
    res.status(201).end();
};

/*
 * GET users listing.
 */
exports.deleteTodo = function(req, res){
    res.json(404, "Not found");
};
