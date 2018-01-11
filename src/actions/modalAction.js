export const hideModal = () => ({
  type: 'HIDE_MODAL'
});

export const showListModal = (listItem = {}) => ({
   type: 'SHOW_LIST_MODAL',
   listItem
});

export const showTaskModal = (listItemTask = {}) => ({
  type: 'SHOW_TASK_MODAL',
  listItemTask
});