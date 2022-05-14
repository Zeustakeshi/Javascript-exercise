/// MVC
class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todoList')) || [];
    }

    addTodos(todo) {
        if (todo.length > 0) {
            this.todos.push(todo);
            this._reload();
        }
    }

    removeTodos(todo) {
        const index = this.todos.findIndex((item) => item === todo);
        this.todos.splice(index, 1);
        this._reload();
    }

    handleChangeTodos(handler) {
        this.changeTodo = handler;
    }

    _reload() {
        localStorage.setItem('todoList', JSON.stringify(this.todos));
        this.changeTodo(this.todos);
    }
}

class View {
    constructor() {
        // get body
        this.app = document.getElementById('root');
        // create todo wrapper
        this.todoWrapper = this.createElement('div', 'todo');
        // create form
        this.form = this.createElement('form', 'todo-form');
        this.form.autocomplete = 'off';
        // create input
        this.input = this.createElement('input', 'todo-input');
        this.input.type = 'text';
        this.input.name = 'todo';
        this.input.placeholder = 'Enter your task';
        // create btn submit
        this.submit = this.createElement('button', 'todo-submit');
        this.submit.textContent = 'Add';
        // create to do list
        this.todoList = this.createElement('div', 'todo-list');
        // add elements to Dom
        this.app.append(this.todoWrapper);
        this.form.append(this.input, this.submit);
        this.todoWrapper.append(this.form, this.todoList);
    }

    createElement(tag, className) {
        const ele = document.createElement(tag);
        if (className) {
            ele.classList.add(className);
        }
        return ele;
    }
    getElement(selector) {
        return document.querySelector(selector);
    }
    get _todoValue() {
        return this.input.value;
    }

    _resetValue() {
        this.input.value = '';
    }

    displayTodo(todos) {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        if (todos.length <= 0) return;
        todos.forEach((todo) => {
            const todoItem = this.createElement('div', 'todo-item');
            const todoText = this.createElement('span', 'todo-text');
            todoText.textContent = todo;
            const todoRemove = this.createElement('i');
            todoRemove.className = 'fa fa-trash todo-remove';
            todoRemove.setAttribute('data-value', todo);
            todoItem.append(todoText, todoRemove);
            this.todoList.append(todoItem);
        });
    }

    viewAddTodo(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!this._todoValue) return;
            handler(this._todoValue);
            this._resetValue();
        });
    }

    viewRemoveTodo(handler) {
        this.todoList.addEventListener('click', (e) => {
            if (e.target.matches('.todo-remove')) {
                const todo = e.target.parentNode;
                todo.parentNode.removeChild(todo);
                const value = e.target.dataset.value;
                handler(value);
            }
        });
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.handleChangeTodos(this.handleChangeTodos);
        this.view.viewAddTodo(this.handleAddTodos);
        this.view.viewRemoveTodo(this.handleRemoveTodos);
        this.handleChangeTodos(this.model.todos);
    }

    handleAddTodos = (todo) => {
        this.model.addTodos(todo);
    };

    handleRemoveTodos = (todo) => {
        this.model.removeTodos(todo);
    };

    handleChangeTodos = (todos) => {
        this.view.displayTodo(todos);
    };
}

const App = new Controller(new Model(), new View());
