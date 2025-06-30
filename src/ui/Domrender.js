export class Domrender{
    //healper method
    addStarPrior(todoDivPrior, isFilled) {
        let span = document.createElement("span");
        span.classList.add("material-icons");   // enables the icon font
        span.textContent = isFilled ? "star" : "star_border";
        span.style.fontSize = "24px";
        span.style.color = "gold";              // filled AND outline stroke colour
        span.style.cursor = "pointer";
        todoDivPrior.appendChild(span);  
    }
    //healper
    addThreeDot(todoDivThreeDot){
        let span = document.createElement("span");
        span.classList.add("material-icons");   // enables the icon font
        span.textContent = "more_vert"
        span.style.fontSize = "24px";
        todoDivThreeDot.appendChild(span);  
    }

    loadProjectList(ProjectList){ //default is to load first project
        let projects = document.querySelector(".projects");
        if (ProjectList.length>0){
            ProjectList.forEach(project => {
            let container = document.createElement("div");
            container.innerText = project.title;
            container.dataset.id = project.id;
            container.classList.add("project")
            projects.appendChild(container);
            })
        } 
        let addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project");
        addProjectButton.innerText = "Add Project";
        projects.appendChild(addProjectButton); 
    }
    loadTodoProject(ProjectId ,ProjectList){
        let Project = ProjectList.find(p => p.id === ProjectId);
        if (!Project) return;
        Project.todoList.forEach(todo => {
            let todoContainer = document.querySelector(".todos");
            todoContainer.innerHTML = ""; //reset

            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            todoDiv.dataset.id = todo.id;

            let todoDivTitle =document.createElement("div");
            todoDivTitle.innerText = todo.title;
            todoDivTitle.classList.add('projectTitle');

            let todoDivDateText =document.createElement("div");
            todoDivDateText.innerText = todo.dueDate ?? "No date";
            todoDivDateText.classList.add('date');

            let todoDivPrior = document.createElement("div");
            this.addStarPrior(todoDivPrior, todo.priority);
            todoDivPrior.classList.add('priority-star');

            let todoDivThreeDot = document.createElement("div");
            this.addThreeDot(todoDivThreeDot);
            todoDivPrior.classList.add('three-dot');

            todoDiv.append(todoDivTitle, todoDivDateText, todoDivPrior, todoDivThreeDot);
            todoContainer.appendChild(todoDiv);
        })
        let addTodoButton = document.createElement("button");
        addTodoButton.classList.add("add-todo");
        addTodoButton.innerText = "Add Task";
        todoContainer.appendChild(addTodoButton);
    }
}