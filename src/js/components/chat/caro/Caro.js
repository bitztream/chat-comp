import React, { Component } from 'react';

import Button from '../../global/Button';

import Arrow from '../../icons/Arrow';

import Gifter from './Gifter';
import Cheerer from './Cheerer';

require('./styles.scss');

class Header extends Component {
  constructor() {
    super();

    this.state = {
      gifter: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState((p) => {
      return {
        gifter: !p.gifter
      };
    });
  }

  render() {
    return (
      <section className="caro">
        <Button onClick={this.handleChange}>
          <Arrow/>
        </Button>
        {(this.state.gifter) ? <Gifter/> : <Cheerer/>} 
        <Button className="right" onClick={this.handleChange}> 
          <Arrow/>
        </Button> 
      </section>
    );
  }
}

export default Header;
