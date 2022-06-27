import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <div className='addTodo'>
        <input value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  handleChange = (e) => {
    this.props.setTodoText(e.target.value)
  }

  handleClick = () => {
    let inputNotEmpty = this.props.text.trim() !== ''
    let inputExist = this.props.todolist.some((todo) => {
      return this.props.text.toLowerCase() === todo.text.toLowerCase()
    })
    if (inputNotEmpty && !inputExist) {
      this.props.addTodo(this.props.text)
      this.props.setTodoText('')
    } else {
      if (inputExist) {
        // show alert popup
        this.props.setAlertFlag('show');
        this.props.setAlertMsg('The item exists.');
        // 1s later, hide alert popup
        const closeAlert = () => {
          this.props.setAlertFlag('hide');
          this.props.setAlertMsg('');
        }
        setTimeout(closeAlert, 1000);
        this.props.setTodoText('')
      }
      return;
    }
  }
}

export default AddTodo;