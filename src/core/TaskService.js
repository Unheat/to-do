import { createTodo } from './TodoFactory.js';
import { Project } from './ProjectFactory.js';
export class TaskServices  {
    constructor(storageAdapter) {
        this.storage = storageAdapter;
        this.projectList = this.storage.getAllProjects() ?? [];
    }
    addTodoToProject(projectId, todoData) {
        const project = this.projectList.find(p => p.id === projectId);
        if (!project) { //  if not found that project
            throw new Error("project not found!");
        }
        const newTodo = createTodo(todoData);
        project.addTodo(newTodo);
        storage.saveAllProjects(this.projectList);
  }
    deleteTodoToProject(projectId, TodoId){
        const project = this.projectList.find(p => p.id === projectId);
        if (!project) { //  if not found that project
            throw new Error("project not found!");
        }
        project.deleteTodo(TodoId);
        storage.saveAllProjects(this.projectList);
    }
    addProject(ProjectTitle){
        let newProject = new Project(ProjectTitle);
        this.projectList.push(newProject);
        storage.saveAllProjects(this.projectList);
    }
    deleteproject(projectIdDel){
        this.projectList = this.projectList.filter(project => project.id !== projectIdDel);
        storage.saveAllProjects(this.projectList);
    }

}
