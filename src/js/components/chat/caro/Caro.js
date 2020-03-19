import React, { Component } from 'react';

import Button from '../../global/Button';

import Arrow from '../../icons/Arrow';

<<<<<<< HEAD
import Gifter from './Gifter';
import Cheerer from './Cheerer';

=======
>>>>>>> f30c08d48754b891632152139497891fcc144e30
require('./styles.scss');

class Header extends Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      gifter: true
=======
      value: ""
>>>>>>> f30c08d48754b891632152139497891fcc144e30
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
<<<<<<< HEAD
    this.setState((p) => {
      return {
        gifter: !p.gifter
=======
    this.setState(() => {
      return {
        value
>>>>>>> f30c08d48754b891632152139497891fcc144e30
      };
    });
  }

  render() {
    return (
      <section className="caro">
<<<<<<< HEAD
        <Button onClick={this.handleChange}>
          <Arrow/>
        </Button>
        {(this.state.gifter) ? <Gifter/> : <Cheerer/>} 
        <Button className="right" onClick={this.handleChange}> 
          <Arrow/>
        </Button> 
=======
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
>>>>>>> f30c08d48754b891632152139497891fcc144e30
      </section>
    );
  }
}

export default Header;
