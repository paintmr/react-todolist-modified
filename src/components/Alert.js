import React, { Component } from 'react';

class Alert extends Component {

  render() {
    return (
      <div className={`alert ${this.props.alertFlag === 'hide' ? 'alert-none' : ''}`}>
        <h1>{this.props.alertMsg}</h1>
      </div>
    );
  }
}

export default Alert;