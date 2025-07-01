// THINK: keep data only (no DOM refs)
export function createTodo({ title, desc, dueDate, priority= false}) {
  return {
    id: crypto.randomUUID(),
    title,
    desc,
    dueDate,
    priority,
    isDone: false,
    toggleIsDone() { this.isDone = !this.isDone; },
    togglePriority() { this.priority = !this.priority; },
    editTitile( newTitle){
        this.title = newTitle;
    },
    editDesc(newDesc){
        this.desc = newDesc;
    },
    editDueDate( newDueDate){
        this.dueDate = dueDate;
    }
  };
}
