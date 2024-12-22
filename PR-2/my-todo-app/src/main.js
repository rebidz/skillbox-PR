var Priority;
(function (Priority) {
    Priority["LOW"] = "low";
    Priority["MEDIUM"] = "medium";
    Priority["HIGH"] = "high";
})(Priority || (Priority = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["INACTIVE"] = "inactive";
})(Status || (Status = {}));
var user = {
    name: '',
    status: Status.ACTIVE,
    todos: [],
    changeStatus: function (newStatus) {
        this.status = newStatus;
        console.log("User status changed to ".concat(newStatus));
    },
    addTodo: function (todo, priority) {
        if (priority === void 0) { priority = Priority.MEDIUM; }
        this.todos.push({ todo: todo, priority: priority });
        console.log("Todo added: ".concat(todo, " (Priority: ").concat(priority, ")"));
    },
    displayTodos: function () {
        console.log("Todos for ".concat(this.name, ":"));
        this.todos.forEach(function (todo) { return console.log("".concat(todo.todo, " (Priority: ").concat(todo.priority, ")")); });
    },
    displayActiveTodos: function () {
        console.log("Active Todos for ".concat(this.name, ":"));
        this.todos
            .filter(function (todo) { return todo.priority !== Priority.HIGH; })
            .forEach(function (todo) { return console.log("".concat(todo.todo, " (Priority: ").concat(todo.priority, ")")); });
    }
};
user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);
