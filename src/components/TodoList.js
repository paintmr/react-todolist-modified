import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <ul className='todoList'>
        {
          todos.map(todo => {
            return <Todo key={todo.id} {...todo} onClickk={() => { toggleTodo(todo.id) }} />
          })
        }
      </ul>
    );
  }
}

export default TodoList;