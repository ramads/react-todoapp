import uuid from 'uuid';

export const addNewListItem = (title, description) => ({
    type: 'ADD_NEW_LIST_ITEM',
    listItem: {
        id: uuid(), 
        title, description,
    }
 });

 export const editListItem = (id, title, description) => ({
    type: 'EDIT_LIST_ITEM',
    listItemUpdate: {
        id, title, description
    }
 });

 export const removeListItem = ({id} = {}) => ({
    type: 'REMOVE_LIST_ITEM',
    id
 });