class TodoList {

    constructor(){
        this.todos = []; //Contient lz liste des tâches
        this.todoListElement = document.getElementById("todo-list");
        this.addButton = document.getElementById("add-todo-btn");
        this.inputField = document.getElementById("todo-input");

        this.addButton.addEventListener("click", () => {
            this.addTodo()
        });
    }

    addTodo(){
        const task = this.inputField.value.trim();

        if(task) {
            this.todos.push(task);
            this.inputField.value = "";
            this.render();
        }
        console.log(this.todos);
    }

    render(){
        this.todoListElement.innerHTML = "";

        for (let i = 0; i < this.todos.length; i++){

            const task = this.todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = task;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", () => this.deleteTodo(i));

            listItem.appendChild(deleteButton);
            this.todoListElement.appendChild(listItem);    
        }
    }

    deleteTodo(index){
        this.todos.splice(index, 1);
        this.render();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const TodoApp = new TodoList();
})