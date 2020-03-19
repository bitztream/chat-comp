import React, { Component } from 'react';

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
        <h5>Monthly Top Gifters</h5>
        <h6>Resets In 14 Days</h6>
      </header>
    );
  }
}

export default Header;
