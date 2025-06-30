// listeners.js (or whatever file)
function addLoadProjectListener({ ui, taskSvc }) {
  // One listener on the parent container
  document.querySelector(".projects").addEventListener("click", e => {
    // Tìm phần tử .project gần nhất từ vị trí click, đảm bảo lấy đúng project dù click vào phần tử con
    const projectEl = e.target.closest("[data-id]"); 
    if (!projectEl) return; // click was not on a project entry

    const id = projectEl.dataset.id;
    ui.loadTodoProject(id, taskSvc.projectList);
  });
}

export {addLoadProjectListener};