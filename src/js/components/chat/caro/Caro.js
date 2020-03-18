import React, { Component } from 'react';

import Button from '../../global/Button';

import Arrow from '../../icons/Arrow';

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
      <section className="caro">
        <Button>
          <Arrow/>
        </Button>
        <header>
          <h5>Monthly Top Gifters</h5>
          <h6>Resets In 14 Days</h6>
        </header> 
        <Button className="right"> 
          <Arrow/>
        </Button>
      </section>
    );
  }
}

export default Header;
