import { TaskStorageInterface } from './storageInterface.js';
// import { projectList } from '../TaskService.js';
export class TaskStorage extends TaskStorageInterface{
  
    getAllProjects() {
        const storedData = localStorage.getItem("projectList");
        if (!storedData) {
        // 🔒 localStorage chưa có dữ liệu gì → trả về mảng rỗng luôn
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
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }
}
