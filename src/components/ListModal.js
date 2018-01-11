import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {showListModal} from '../actions/modalAction';
import ListForm from './ListForm';

const ModalForm = (props) => (
    <Modal
        isOpen={props.modal.listModal}
        contentLabel="List Modal"
        appElement={document.getElementById('app')}
    >
        <h3>Add New List</h3>
        <ListForm {...props.modal.listItem} />
    </Modal>
);

const AddButton = (props) => (
    <button className="btn btn-success show-todolist-modal" title="Create New List" onClick={() => {
        props.dispatch(showListModal());
    }}>
        Create New List
    </button>
);


const mapStateToProps = (state) => ({ modal: state.modal });

const ListModal = connect(mapStateToProps)(ModalForm);
const AddListButton = connect(mapStateToProps)(AddButton);

export {ListModal, AddListButton};