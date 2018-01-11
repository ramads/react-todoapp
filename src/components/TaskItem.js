import React from 'react';
import { connect } from 'react-redux';
import { removeTask, taskDone } from '../actions/taskAction';
import Checkbox from './Checkbox';

class TaskItem extends React.Component {
    removeTask = () => {
        this.props.dispatch(removeTask({
            id: this.props.id, 
            listItemId: this.props.listItemId
        }));
    }

    onTaskDone = (isChecked) => {
        console.log(isChecked);
        this.props.dispatch(taskDone({
            id: this.props.id, 
            listItemId: this.props.listItemId,
            completed: isChecked
        }));
    }

    render() {
        return (
            <tr className="task-item" id={this.props.id}>
                <td width="50" style={{verticalAlign: 'middle', textAlign: 'center'}}>
                    <Checkbox isChecked={this.props.completed} onClick={this.onTaskDone} />
                </td>
                <td  className={'task-item-title ' + (this.props.completed && 'done')}>
                    {this.props.title}
                    <div className="row-buttons">
                        <button onClick={this.removeTask} id="delete-task" className="btn btn-xs btn-danger">
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps)(TaskItem);