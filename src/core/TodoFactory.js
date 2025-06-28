// THINK: keep data only (no DOM refs)
export function createTodo({ title, desc, dueDate, priority}) {
  return {
    id: crypto.randomUUID(),
    title,
    desc,
    dueDate,
    priority,
    isDone: false
    // toggle() { this.isDone = !this.isDone; }   // this is removed for better memory store, implement it in TaskSerice
  };
}
