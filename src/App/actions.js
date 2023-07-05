export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
  export const editTask = (taskId, newDescription) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newDescription },
  });
  