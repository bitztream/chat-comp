import React, { Component } from 'react';
import Button from '../../global/Button';

require('./styles.scss');

class Input extends Component {
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
      <section id="chat-input">
        <div className="chatBox">
          <textarea placeholder="Send a message"></textarea>
        </div>
      </section>
    );
  }
}

export default Input;                         
