import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'blue' : 'grey',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                <form onSubmit={this.onSaveClick.bind(this)}>
		<div className="ui large input"> 
                <input type="text" defaultValue={task} ref="editInput"  />
		</div> 
                </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                <button onClick={this.onSaveClick.bind(this)} className="ui tiny basic primary button"><i className="green save icon"></i> Save</button>
                <button onClick={this.onCancelClick.bind(this)} className="ui tiny basic button" >Cancel</button>
                </td>
            );
        }

        return (
            <td>
            <button onClick={this.onEditClick.bind(this)}  className="ui tiny primary button"><i className="edit icon"></i>Edit</button>
            <button onClick={this.props.deleteTask.bind(this, this.props.task)}  className="ui basic tiny button"><i className="red remove icon"></i> Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
