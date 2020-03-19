import React, { Component } from 'react';

import Wrap from './Wrap';
import Header from './header/Header';
import Caro from './caro/Caro';
import Input from './input/Input';
import Messages from './messages/Messages';

import axios from 'axios';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      chat: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    
    axios
    .get('http://localhost:8000/api?room=90')
    .then((re, er)=>{
      if (re) {
        console.log(typeof re.data);
        this.setState(re.data);
      }
    });
  
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
        <Messages msgs={this.state.msgs}/>
        <Input/>
      </Wrap>
    );
  }
}

export default Chat;
