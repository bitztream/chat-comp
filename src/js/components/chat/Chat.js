import React, { Component } from 'react';

import Wrap from './Wrap';
import Header from './header/Header';
import Body from './Body';
import UserList from './UserList';

import axios from 'axios';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      chat: {},
      chatVis: true,
      userVis: false
    };

		this.listProps = this.listProps.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    
    axios
    .get('http://localhost:8000/api?room=90')
    .then((re, er)=>{
      if (re) {
        this.setState((p) => {
          p.chat = re.data;
          return p;
        });
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

	listProps() {
		return {
			mods: this.state.chat.vips,
			vips: this.state.chat.mods,
			users: this.state.chat.users,
			close: this.toggle
		}
	}

  toggle(el) {
    this.setState((p) => {
      p[el] = !p[el];
      return p;
    });
  }

  render() { 
		let listProps = this.listProps();	
    return (
      <Wrap>
        <Header toggle={this.toggle}/>
        { 
          this.state.userVis ? 
            <UserList {...listProps} /> : 
            <Body msgs={this.state.chat.msgs}/>
        }
      </Wrap>
    );
  }
}

export default Chat;
