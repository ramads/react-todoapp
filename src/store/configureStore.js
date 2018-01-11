import {createStore, combineReducers} from 'redux';
import modalReducer from '../reducers/modalReducer';
import listReducer from '../reducers/listReducer';
import taskReducer from '../reducers/taskReducer';

export default () => {
    const store = createStore(
        combineReducers({
            modal: modalReducer,
            lists: listReducer,
            tasks: taskReducer
        })
    );

    return store;
}