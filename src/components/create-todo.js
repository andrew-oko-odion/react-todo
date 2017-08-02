import React from 'react';

class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    
    renderError() {
        if (!this.state.error) { return null; }
        return <div style={ { color: 'red' } }> {this.state.error}</div>;
    }

    render() {
        return (
	    <form onSubmit={this.handleCreate.bind(this)}>
		<div className="ui large fluid action input">
                    <input type="text" placeholder="What do I need to do?" ref="createInput" />
		    <button className="ui red button">Create</button>
		</div>
		<div className="ui hidden divider"></div>
                {this.renderError()}
            </form>
	    
        );
    }

    handleCreate(event) {
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }
        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}

export default  TodosList; 
