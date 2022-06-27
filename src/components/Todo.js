import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Todo extends Component {

  render() {
    const { completed, text, onClickk } = this.props
    return (
      <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={onClickk}><FontAwesomeIcon icon={faStar} /><span>{text}</span></li>
    );
  }
}

export default Todo;