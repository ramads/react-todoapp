import React from 'react';
import Header from './Header';
import Lists from './Lists';
import {ListModal} from './ListModal';
import TaskModal from './TaskModal';
import { connect } from 'react-redux';

class Todoapp extends React.Component {

    render = () => (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <Lists />
                    </div>
                </div>
            </div>
            <TaskModal />
            <ListModal />
        </div>
    );

    componentDidMount() {
        try {
            const jsonLists = localStorage.getItem('lists');
            const lists = JSON.parse(jsonLists);

            const jsonTasks = localStorage.getItem('tasks');
            const tasks = JSON.parse(jsonTasks);

            if (lists) {
                this.props.dispatch({
                    type: 'INIT_LISTS',
                    lists: lists
                });

                this.props.dispatch({
                    type: 'INIT_TASKS',
                    tasks: tasks
                });
            }
        } catch (e) {
            console.log('gagal load data');
        }
    }
}

const mapStateToProps = (state) => (
    {
        lists: state.lists,
        tasks: state.tasks
    }
);

export default connect(mapStateToProps)(Todoapp);