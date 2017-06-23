
import _ from 'lodash';
import React from 'react';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
	    <table className="ui very padded table">
            <tbody>
            {this.renderItems()}
            </tbody>
	    </table>
        );
    }
}
