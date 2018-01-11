const modalDefaultState = {
    listModal: false,
    taskModal: false
}

export default (state = modalDefaultState, action) => {
    switch(action.type) {
        case 'HIDE_MODAL':
            return {
                listModal: false,
                taskModal: false
            };
        case 'SHOW_LIST_MODAL':
            return {
                listModal: true,
                listItem: action.listItem,
                taskModal: false
            };
        case 'SHOW_TASK_MODAL':
            return {
                listModal: false,
                listItemTask: action.listItemTask,
                taskModal: true
            };
        default: return state;
    }
}