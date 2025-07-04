import { TaskStorage } from './core/storage/storage.js';
import { TaskServices } from './core/TaskService.js';
import * as addEvents from './ui/addEventListener.js';
import { Domrender } from './ui/Domrender.js';
import './styles.css'; 
// function renderMainTodoUI(projectId) {
//     ui.renderTodoList(taskSvc.projectList, projectId);
//     addAddTodoButtonListener(() => {
//         ui.renderAddTodoForm();
//         setupTodoFormListener({
//             taskSvc, projectId,
//             onSubmit: () => renderMainTodoUI(projectId)
//         });
//     });
// }
document.addEventListener("DOMContentLoaded", () => {
    let mainStorage = new TaskStorage();
    let mainService = new TaskServices(mainStorage);
    let render = new Domrender();
    render.loadProjectList(mainService.projectList);
    if(mainService.projectList.length > 0){
        render.loadTodoFromProjectId(mainService.projectList[0].id, mainService.projectList);
    } 
    addEvents.ProjectFormCancel({
    ui: render,
    taskSvc: mainService
    });
    addEvents.showTodoForm({
    ui: render,
    taskSvc: mainService
    });
    addEvents.showTodoForm({
    ui: render,
    taskSvc: mainService
    });
    addEvents.showProjectForm();

});
