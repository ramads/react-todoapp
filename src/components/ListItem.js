import React from 'react';
import {connect} from 'react-redux';
import { removeListItem, editListItem } from '../actions/listAction';
import { showListModal, showTaskModal } from '../actions/modalAction';


class ListItem extends React.Component {
    onRemoveListItem = () => {
        this.props.dispatch(removeListItem({id: this.props.id}));
    }

    onEditListItem = () => {
        this.props.dispatch(showListModal({
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
        }));
    }

    onManageTask = () => {
        this.props.dispatch(showTaskModal(
            {
                id: this.props.id,
                title: this.props.title,
                description: this.props.description,
            }
        ));
    }

    render() {
        return (
            <li id={this.props.id} className="list-group-item">
                <h4 className="list-group-item-heading">{this.props.title} <span className="badge">{this.props.tasks[this.props.id].length}</span></h4>
                <p className="list-group-item-text">{this.props.description}</p>
                <div className="buttons">
                    <button onClick={this.onManageTask} className="btn btn-info show-task-modal btn-xs" title="Manage Tasks">
                        <i className="glyphicon glyphicon-ok"></i>
                    </button>
                    <button onClick={this.onEditListItem} className="btn btn-default show-todolist-modal btn-xs edit" title="Edit todolist">
                        <i className="glyphicon glyphicon-edit"></i>
                    </button>
                    <button onClick={this.onRemoveListItem} className="btn btn-danger btn-xs" title="Delete">
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({ 
    modal: state.modal,
    tasks: state.tasks,
    lists: state.lists
});

export default connect(mapStateToProps)(ListItem);