import React from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onChange = (event) => this.setState({
            [event.target.name]: event.target.value
    });

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type='text'
                    name='title' 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="AddTodo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type='submit'
                    value='submit'
                    className='btn'
                    style={{ flex: '1' }}
                />
            </form>
        );
    };
};

AddTodo.propTypes = {
    addItem: PropTypes.func.isRequired
}
export default AddTodo;
