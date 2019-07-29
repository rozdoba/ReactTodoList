import React from 'react';
//import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';


import './App.css';

class App extends React.Component {
  state = {
    todos: [
      
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => 
    this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  deleteItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) => this.setState({ todos: [...this.state.todos.filter((todo) => 
        todo.id !== id)]
      })
    );
  }

  addItem = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title, 
      completed: false
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data]}));
  }
  
  render() {
    
    //console.log("State of App component: " + this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addItem={this.addItem}/>
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  deleteItem={this.deleteItem}
                />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
