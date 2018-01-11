import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modalAction';
import { addNewListItem, editListItem } from '../actions/listAction';
import { initTask } from '../actions/taskAction';

class FormModal extends React.Component {
    
    onSubmitForm = (e) => {
        e.preventDefault();
        if (e.type === 'submit') {
            const title = e.target.elements.title.value;
            const desc = e.target.elements.description.value;

            if (title) {
                if(this.props.id) {
                    this.props.dispatch(editListItem(this.props.id, title, desc));
                } else {
                    const action = this.props.dispatch(addNewListItem(title, desc));
                    
                    this.props.dispatch(initTask(action.listItem.id));
                }
                
                this.props.dispatch(hideModal());
            } else {
                alert('Title Tidak boleh kosong!');
            }
        }
    }

    cancelButtonOnClick = (e) => {
        e.preventDefault();
        this.props.dispatch(hideModal());
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label className="control-label">List Name</label>
                    <input autoFocus className="form-control input-lg" name="title" type="text" defaultValue={this.props.title ? this.props.title : ''} />
                    <input name="id" type="hidden" />
                </div>
                <div className="form-group">
                    <label className="control-label">Description</label>
                    <input className="form-control input-lg" name="description" type="text" defaultValue={this.props.description ? this.props.description : ''}></input>
                </div>
                <button type="submit" className="btn btn-success" style={{marginRight: 0.5 + 'em'}}>
                    Save
                </button>
                <button className="btn btn-warning" onClick={this.cancelButtonOnClick}>
                    Cancel
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        lists: state.lists
    };
}

export default connect(mapStateToProps)(FormModal);