// listeners.js (or whatever file)
function addLoadProjectListener({ ui, taskSvc }) {
  // One listener on the parent container
  document.querySelector(".projects").addEventListener("click", e => {
    // Tìm phần tử .project gần nhất từ vị trí click, đảm bảo lấy đúng project dù click vào phần tử con
    e.preventDefault(); // prevent page reload
    const projectEl = e.target.closest("[data-id]"); 
    if (!projectEl) return; // click was not on a project entry

    const Proid = projectEl.dataset.id;
    ui.loadTodoFromProjectId(Proid, taskSvc.projectList);
  });
}

//healper
function addTodoSubmit({ ui, taskSvc }){
    document.getElementById("listForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh
    const projectId = e.target.querySelector(".listSubmitBtn").dataset.projectId;
    // Get values from input fields
    const title   = document.getElementById("listInput").value.trim();
    const details = document.getElementById("listInputDetail").value.trim();
    const dueDate = document.getElementById("listInputDate").value;

    // Optional: validate inputs
    if (!title) {
        alert("Title is required.");
        return;
    }

    // Call your function to create the todo
    const todoData = {
        title: title,
        desc: details,
        dueDate: dueDate,
        priority: false
    };

    taskSvc.addTodoToProject(projectId, todoData); // or pass to taskSvc.addTodoToProject()

    // Optional: reset form
    e.target.reset();
    ui.loadTodoFromProjectId(projectId, taskSvc.projectList);
    showTodoForm({ ui, taskSvc })
});
} //helper
function addTodoButtonCancel({ ui, taskSvc }){
    const TodoForm = document.querySelector(".listCancelBtn");
    TodoForm.addEventListener("click", e =>{
      const projectId = e.target.querySelector(".listSubmitBtn").dataset.projectId;
      document.getElementById("listInput").value = '';
      document.getElementById("listInputDetail").value = '';
      document.getElementById("listInputDate").value = '';
      ui.loadTodoFromProjectId(projectId, taskSvc.projectList);
      showTodoForm({ ui, taskSvc })
    });
}
function showTodoForm({ ui, taskSvc }){
    const button = document.querySelector(".add-todo");
    if (button) {
      button.addEventListener("click", e => {
        ui.loadFormTodo();
        addTodoSubmit({ ui, taskSvc });
        addTodoButtonCancel({ ui, taskSvc });
      })
    }
}

function ProjectFormSubmit({ ui, taskSvc }){
    const ProjectForm = document.querySelector("#projectForm");
    ProjectForm.addEventListener("submit", e=>{
        e.preventDefault(); // prevent page reload
        const title   = document.getElementById("projectInput").value.trim();
        taskSvc.addProject(title);
        ui.loadProjectList(taskSvc.projectList);
        ProjectForm.classList.add("hidden")
    });
}
function ProjectFormCancel() {
  const projectForm = document.querySelector("#projectForm");
  const projectFormCancelButton = document.querySelector(".projectCancelBtn");
  if (!projectForm || !projectFormCancelButton){
    console.log("can no find projectForm or cancelBtn");
    return;
  }

  projectFormCancelButton.addEventListener("click", e => {
    const title   = document.getElementById("projectInput");
    title.value = '';
    e.preventDefault(); // prevent page reload
    projectForm.classList.add("hidden");

  });
}

function showProjectForm(){
  document.querySelector(".add-project").addEventListener("click" , e => {
      
      const projectForm = document.querySelector("#projectForm");
      projectForm.classList.remove("hidden");
  });
  
}


export {addLoadProjectListener, showTodoForm, ProjectFormSubmit, ProjectFormCancel, showProjectForm}