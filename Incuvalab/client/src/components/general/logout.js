import React, { Component } from 'react';

class ButtonLogout extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      sessionStorage.clear();
      window.location.replace('/');
    }
    render() {
      return <button onClick={this.handleClick} class="dropdown-item">Cerrar Sesión</button>;
    }
  }

export default ButtonLogout;