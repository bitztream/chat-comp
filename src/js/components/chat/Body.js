import React, { Component } from 'react';

import Con from './Con';
import Caro from './caro/Caro';
import Input from './input/Input';
import Messages from './messages/Messages';


class Body extends Component {
  constructor() {
    super();

    this.state = {
      chat: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <Con>
        <Caro/>
        <Messages msgs={this.props.msgs}/>
        <Input/>
      </Con>
    );
  }
}

export default Body;
