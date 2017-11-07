import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import Toast from 'modern-toast';

const todos = [
    {
	task: 'Move the Sofa to the middle of the living room',
	isCompleted: false
    },
    {
	task: 'Call Nenelly for house decoration',
	isCompleted: true
    },
    {
	task: 'Feed the Parrot before going to work',
	isCompleted: true
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos };
    }

    render() {
        return (
	    <div>
                <h3 className="ui teal header">New</h3>
		Toast.success('saved!!');
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
		    todos={this.state.todos}
		    toggleTask={this.toggleTask.bind(this)}
		    saveTask={this.saveTask.bind(this)}
		    deleteTask={this.deleteTask.bind(this)}
                />
	    </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

export default App;

