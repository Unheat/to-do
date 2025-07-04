import { TaskStorageInterface } from './storageInterface.js';
import { Project } from '../ProjectFactory.js'; // 

// import { projectList } from '../TaskService.js';
export class TaskStorage extends TaskStorageInterface{
  
    getAllProjects() {
        const storedData = localStorage.getItem("projectList");
        console.log("retrived data: ", storedData);
        if (!storedData) {
            return [];
        }
        try {
            const parsedData = JSON.parse(storedData);
            return parsedData.map(projectData => new Project(projectData));
        } catch (e) {
            console.error('Failed to parse saved projects', e);
            return [];
        }
    } 
  
  
    saveAllProjects(projectList) {
    console.log(JSON.stringify(projectList));
    localStorage.setItem("projectList", JSON.stringify(projectList));

  }
}
