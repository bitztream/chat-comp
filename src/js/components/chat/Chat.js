import React, { Component } from 'react';

import Wrap from './Wrap';
import Header from './header/Header';
import Caro from './caro/Caro';
<<<<<<< HEAD
import Input from './input/Input';
import Messages from './messages/Messages';

import axios from 'axios';
=======
>>>>>>> f30c08d48754b891632152139497891fcc144e30

class Chat extends Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      chat: {}
=======
      value: ""
>>>>>>> f30c08d48754b891632152139497891fcc144e30
    };

    this.handleChange = this.handleChange.bind(this);
  }

<<<<<<< HEAD
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

=======
>>>>>>> f30c08d48754b891632152139497891fcc144e30
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
<<<<<<< HEAD
        <Messages msgs={this.state.msgs}/>
        <Input/>
=======
>>>>>>> f30c08d48754b891632152139497891fcc144e30
      </Wrap>
    );
  }
}

export default Chat;
