class Model {
    constructor() {
        // The state of the model, an array of todo objects, prepopulated
        this.todos = [
            // { id: 1, text: 'Run a marathon', complete: false },
            // { id: 2, text: 'Plant a garden', complete: false }
        ]
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false
        }

        this.todos.push(todo);
    }

    // Map through all todos, replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo );
    }

    // Use filter to delete a todo by id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // Flip the 'complete' boolean on specified todo
    toggleTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo );
    }
}

class View {
    constructor() {

    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}

const app = new Controller(new Model(), new View());