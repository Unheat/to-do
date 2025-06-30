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
    editTitile( newTitle){},
    editDesc(newDesc){},
    editDueDate( newDueDate){}
  };
}
