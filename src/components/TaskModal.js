import React from 'react';
import Modal from 'react-modal';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modalAction';
import { addNewTaskItem } from '../actions/taskAction';

class TaskModal extends React.Component {
    onTaskSubmit = (e) => {
        e.preventDefault();
        if (e.type === 'submit') {
            const taskTitle = e.target.elements.title.value;
            if (taskTitle) {
                this.props.dispatch(addNewTaskItem(this.props.modal.listItemTask.id, taskTitle));
            }
            e.target.elements.title.value = '';
        }
    }

    closeTaskModal = () => {
        this.props.dispatch(hideModal());
    }

    render() {
        return (
            <Modal
                isOpen={this.props.modal.taskModal}
                contentLabel="Task Modal"
                appElement={document.getElementById('app')}
            >
            <div className="task-modal-header">
                <h4>Manage Tasks of <strong>{
                    this.props.modal.listItemTask ? this.props.modal.listItemTask.title : ''
                }</strong></h4>
                <button className="btn btn-warning" onClick={this.closeTaskModal}>Close</button>
            </div>
                <div className="panel panel-default">
                    <table className="table">
                        <thead>
                            <tr>
                                <td colSpan="2">
                                    <form id="task-form" onSubmit={this.onTaskSubmit}>
                                        <input id="task-title" type="text" name="title" placeholder="Enter New Task" className="task-input" />
                                    </form>
                                </td>
                            </tr>
                        </thead>
                        <tbody id="task-modal-body">
                            {
                                this.props.modal.listItemTask && (
                                    this.props.tasks[this.props.modal.listItemTask.id].map((task) => (
                                        <TaskItem key={task.id} listItemId={this.props.modal.listItemTask.id} {...task} />
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal,
    tasks: state.tasks
});

export default connect(mapStateToProps)(TaskModal);