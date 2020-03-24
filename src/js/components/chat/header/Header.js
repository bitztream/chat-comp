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
		this.something = this.something.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.toggle('userVis');
  }

	something(e) {
		var el = e.target;
		console.log(el.getBoundingClientRect());
	
	}

  render() {
    return (
      <header>
        <Button onMouseEnter={this.something}>
          <ExpCon/>
        </Button>
        <h3>Stream Chat</h3> 
        <Button onClick={this.toggle}>
          <Users/>
        </Button>
      </header>
    );
  }
}

export default Header;
