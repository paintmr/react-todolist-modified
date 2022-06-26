import React, { Component } from 'react';

import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FilterSetterContainer from '../containers/FilterSetterContainer';


class ToDoListWrap extends Component {
  render() {
    return (
      <div>
        My To-Do-List
        <AddTodoContainer />
        <FilterSetterContainer />
        <TodoListContainer />
      </div>
    );
  }

}

export default ToDoListWrap;