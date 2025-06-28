import { createTodo } from './TodoFactory.js';
import { Project } from './ProjectFactory.js';


class TaskServices  {
    constructor(storageAdapter) {
        this.storage = storageAdapter;
        this.projectList = []; // Now an INSTANCE variable, not global
    }
    addTodoToProject(projectId, todoData) {
        const project = this.projectList.find(p => p.id === projectId);
        if (!project) { //  if not found that project
            throw new Error("project not found!");
        }
        const newTodo = createTodo(todoData);
        project.addTodo(newTodo);
        storage.saveAllProjects(projectList);
  }
    deleteTodoToProject(projectId, TodoId){
        const project = this.projectList.find(p => p.id === projectId);
        if (!project) { //  if not found that project
            throw new Error("project not found!");
        }
        project.deleteTodo(TodoId);
        storage.saveAllProjects(projectList);
    }
    addProject(ProjectTitle){
        let newProject = new Project(ProjectTitle);
        projectList.push(newProject);
        storage.saveAllProjects(projectList);
    }
    deleteproject(projectIdDel){
        projectList = projectList.filter(project => project.id !== projectIdDel);
        storage.saveAllProjects(projectList);
    }

}
export {TaskServices};