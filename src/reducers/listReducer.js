/**
    {
        title: '',
        description: '',
        tasks: [

        ]
    }
 */

const listDefaultState = [];

export default (state = listDefaultState, action) => {
    switch(action.type) {
        case 'INIT_LISTS': 
            return action.lists;
        case 'ADD_NEW_LIST_ITEM':
            return [
                ...state,
                action.listItem
            ];
        case 'EDIT_LIST_ITEM':
            return state.map((listItem) => {
                if(listItem.id === action.listItemUpdate.id) {
                    return {
                        ...listItem,
                        ...action.listItemUpdate
                    };
                } else {
                    return listItem;
                }
            })

        case 'REMOVE_LIST_ITEM':
            return state.filter(({ id }) => id !== action.id);

        default: return state;
    }
}