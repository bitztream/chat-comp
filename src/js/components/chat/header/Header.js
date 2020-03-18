import React, { Component } from 'react';

import Button from '../../global/Button';

import ExpCon from '../../icons/ExpCon';
import Users from '../../icons/Users';

require('./styles.scss');

class Header extends Component {
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
      <header>
        <Button>
          <ExpCon/>
        </Button>
        <h3>Stream Chat</h3> 
        <Button>
          <Users/>
        </Button>
      </header>
    );
  }
}

export default Header;
