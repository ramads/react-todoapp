import uuid from 'uuid';

export const initTask = (listItemId) => ({
    type: 'INIT_NEW_TASK',
    listItemId
 });

 export const addNewTaskItem = (listItemId, title) => ({
    type: 'ADD_NEW_TASK_ITEM',
    listItemId,
    taskItem: {
        id: uuid(), 
        title,
        completed: false
    }
 });

 export const taskDone = ({id, listItemId, completed} = {}) => ({
    type: 'TASK_DONE',
    id, listItemId, completed
 });

 export const removeTask = ({id, listItemId} = {}) => ({
    type: 'REMOVE_TASK',
    id, listItemId
 });