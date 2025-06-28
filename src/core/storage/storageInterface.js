// Abstract interface (no implementation)
export class TaskStorageInterface {
  saveProject(project) {
    throw new Error('saveProject method must be implemented');
  }
  
  getProject(id) {
    throw new Error('getProject method must be implemented');
  }
  
  getAllProjects() {
    throw new Error('getAllProjects method must be implemented');
  }
  
  saveAllProjects(projects) {
    throw new Error('saveAllProjects method must be implemented');
  }
}
