/**
    {
        listid: [
            {
                id: 'taskcontoh1',
                title: 'makan',
                completed: false
            }, {
                id: 'taskcontoh2',
                title: 'minum',
                completed: true
            }
        ]
    }
 */
const taskDefaultState = {};

export default (state = taskDefaultState, action) => {
    switch(action.type) {
        case 'INIT_TASKS':
            return action.tasks;
        case 'INIT_NEW_TASK':
            return {
                ...state,
                [action.listItemId]: []
            };
        case 'ADD_NEW_TASK_ITEM':
            state[action.listItemId].push(action.taskItem);
            return {
                ...state
            };
        case 'TASK_DONE':
            state[action.listItemId].map((taskItem) => {
                if(taskItem.id === action.id) {
                    taskItem.completed = !action.completed;
                };
                return taskItem;
            });
            return {
                ...state
            }

        case 'REMOVE_TASK':
            state[action.listItemId] = state[action.listItemId].filter(({ id }) => id !== action.id);
            return {
                ...state
            };

        default: return state;
    }
}