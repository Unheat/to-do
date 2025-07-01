// listeners.js (or whatever file)
function addLoadProjectListener({ ui, taskSvc }) {
  // One listener on the parent container
  document.querySelector(".projects").addEventListener("click", e => {
    // Tìm phần tử .project gần nhất từ vị trí click, đảm bảo lấy đúng project dù click vào phần tử con
    const projectEl = e.target.closest("[data-id]"); 
    if (!projectEl) return; // click was not on a project entry

    const id = projectEl.dataset.id;
    ui.loadTodoFromProjectId(id, taskSvc.projectList);
  });
}
function addTodoListener({ ui, taskSvc }){
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
});

}

export {addLoadProjectListener};