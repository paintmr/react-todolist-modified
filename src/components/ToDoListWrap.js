import React, { Component } from 'react';

import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FilterSetterContainer from '../containers/FilterSetterContainer';
import AlertContainer from '../containers/AlertContainer';




class ToDoListWrap extends Component {

  render() {
    return (
      <div className='toDoListWrap'>
        <h1 className='title'>TO-DO LIST</h1>
        <AddTodoContainer />
        <FilterSetterContainer />
        <TodoListContainer />
        <AlertContainer />
      </div>
    );
  }

}

export default ToDoListWrap;