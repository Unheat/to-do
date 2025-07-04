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

    init() {
        const projects = document.querySelector(".projects");

        // Add Project Button
        const addProjectButton = document.createElement("button");
        addProjectButton.classList.add("add-project");
        addProjectButton.innerText = "Add Project";
        projects.appendChild(addProjectButton);

        // Hidden Form (only once)
        const form = document.createElement("form");
        form.id = "projectForm";
        form.setAttribute("autocomplete", "off");
        form.classList.add("hidden");

        const inputDiv = document.createElement("div");
        inputDiv.className = "inputField";

        const input = document.createElement("input");
        input.type = "text";
        input.id = "projectInput";
        input.placeholder = "Enter Project Name";
        input.maxLength = 24;

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "formButtons";

        const submitBtn = document.createElement("input");
        submitBtn.type = "submit";
        submitBtn.className = "projectSubmitBtn";
        submitBtn.value = "Add";

        const cancelBtn = document.createElement("input");
        cancelBtn.type = "button";
        cancelBtn.className = "projectCancelBtn";
        cancelBtn.value = "Cancel";

        buttonDiv.appendChild(submitBtn);
        buttonDiv.appendChild(cancelBtn);
        inputDiv.appendChild(input);
        inputDiv.appendChild(buttonDiv);
        form.appendChild(inputDiv);
        projects.appendChild(form);
    }

    loadProjectList(ProjectList){ //default is to load first project
        const projects = document.querySelector(".projects");

        // Remove old project list (but keep form & add button)
        const children = [...projects.children];
        for (let child of children) {
            if (child.classList.contains("project")) {
                projects.removeChild(child);
            }
        }
        if (ProjectList.length>0){
            ProjectList.forEach(project => {
            let container = document.createElement("div");
            container.innerText = project.title;
            container.dataset.id = project.id;
            container.classList.add("project")
            projects.insertBefore(container, projects.querySelector("#projectForm"));
            })
        } 
    }
    loadTodoFromProjectId(ProjectId ,ProjectList){
        let Project = ProjectList.find(p => p.id === ProjectId);
        if (!Project) {
            console.log("can not find project id line 89 domreder");
        };
        let todoContainer = document.querySelector(".todos");
        [...todoContainer.children].forEach(child => {
            if (!child.classList.contains('add-todo')) {
                todoContainer.removeChild(child);
            }
        });
        Project.todoList.forEach(todo => {
            
            

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
        addTodoButton.dataset.id = ProjectId;

        console.log(addTodoButton.dataset.projectId);

        todoContainer.appendChild(addTodoButton);
    }
    loadFormTodo(){
        const ProjectId = document.querySelector(".add-todo").dataset.id;
        console.log("ProjectId:" ,ProjectId);
        const container = document.querySelector(".todos"); 
        container.innerHTML = `
            <form id="listForm" class="" autocomplete="off">
                <div class="inputField">
                    <label>Title:</label>
                    <input type="text" id="listInput" placeholder="What to do?">
                    <label>Details(optional):</label>
                    <textarea type="text" id="listInputDetail" placeholder="eg: I'm just gonna procrastinate, aren't I?" wrap="hard"></textarea>
                    <label>Date:</label>
                    <input type="date" id="listInputDate">
                    <div class="formButtons">
                        <input type="submit" class="listSubmitBtn" value="Add" data-project-id="${ProjectId}">
                        <input type="button" class="listCancelBtn" value="Cancel">
                    </div>
                </div>
            </form>
        `;
    }

}