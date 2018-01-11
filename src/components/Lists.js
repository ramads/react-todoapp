import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

class Lists extends React.Component {
    render() {
        return (
            <div id='todolist-record' className="panel panel-default">
                <ul className="list-group" id="todo-lists">
                    {
                        this.props.lists.map((listItem) => (
                            <ListItem key={listItem.id} {...listItem} />
                        ))
                    }
                </ul>
                <div className="panel-footer">
                    <small>
                        <span id="todolist-counter">{this.props.lists.length}</span> list 
                        <span> { this.props.lists.length > 1 ? 'items' : 'item' }</span>
                    </small>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const jsonLists = JSON.stringify(this.props.lists);
        const jsonTasks = JSON.stringify(this.props.tasks);
        localStorage.setItem('lists', jsonLists);
        localStorage.setItem('tasks', jsonTasks);
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(Lists);;