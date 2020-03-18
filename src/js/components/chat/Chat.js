import React, { Component } from 'react';

import Wrap from './Wrap';
import Header from './header/Header';
import Caro from './caro/Caro';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
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
      <Wrap>
        <Header/>
        <Caro/>
      </Wrap>
    );
  }
}

export default Chat;
