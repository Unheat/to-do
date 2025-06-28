export class Project {
    constructor({id, title, todoList = []}){
        this.id = id || crypto.randomUUID();
        this.title = title;
        this.todoList = todoList.map(todo => createTodo(todo));
    }
    addTodo(Todo){
        this.todoList.push(Todo);
    }
    deleteTodo(TodoId){
        this.todoList = this.todoList.filter(todo => todo.id !== TodoId);
    }

}