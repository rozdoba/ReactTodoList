import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    markComplete = () => {
        //console.log(this.props);
        this.props.todo.completed = true;
    }
    
    render() {
        //console.log("Properties of Todos component: " + this.props.todos);
        return (
            this.props.todos.map((todo) => 
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>
        ));
    };
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}
export default Todos;