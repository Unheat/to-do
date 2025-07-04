import { createTodo } from './TodoFactory.js';
import { Project } from './ProjectFactory.js';
export class TaskServices  {
    constructor(storageAdapter) {
        this.storage = storageAdapter;
        this.projectList = this.storage.getAllProjects() ?? [];
    }
    addTodoToProject(projectId, todoData) {
        const project = this.projectList.find(p => p.id === projectId);
        console.log(project)
        if (!project) { //  if not found that project
            console.log("projectId:", projectId);
            console.log(JSON.stringify(this.projectList));

            console.log(project);
            throw new Error("project not found!");
        }
        const newTodo = createTodo(todoData);
        project.addTodo(newTodo);
        this.storage.saveAllProjects(this.projectList);
  }
    deleteTodoToProject(projectId, TodoId){
        const project = this.projectList.find(p => p.id === projectId);
        if (!project) { //  if not found that project
            throw new Error("project not found!");
        }
        project.deleteTodo(TodoId);
        this.storage.saveAllProjects(this.projectList);
    }
    addProject(ProjectTitle){
        let newProject = new Project({title: ProjectTitle});
        this.projectList.push(newProject);
        console.log("added new project");
        this.storage.saveAllProjects(this.projectList);
        console.log("added and saved new project");
    }
    deleteproject(projectIdDel){
        this.projectList = this.projectList.filter(project => project.id !== projectIdDel);
        this.addProjectstorage.saveAllProjects(this.projectList);
    }

}
