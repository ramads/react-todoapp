import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import Todoapp from './components/Todoapp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


// create redux store
const store = configureStore();


const app = (
    <Provider store={store}>
        <Todoapp />
    </Provider>
);

var appRoot = document.getElementById('app'); 
ReactDOM.render(app, appRoot);