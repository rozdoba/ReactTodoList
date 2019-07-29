import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '10px',
            borderBottom: '1px #ccc dashed',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    } 

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}> 
                <p >
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    { title }
                    <button onClick={this.props.deleteItem.bind(this,id)} style={btnStyle}>Delete</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: "black",
    color: "white",
    borderStyle: "solid",
    borderColor: "black",
    padding: "5px, 10px",
    borderRadius: "10%",
    cursor: "pointer",
    float: "right"
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default TodoItem
