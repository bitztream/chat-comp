import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.css';

require('./styles.scss');
require('./simpleBar.scss');

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    if (this.props.msgs) {
      var msgs = this.props.msgs.map((msg, x) => {
        console.log(msg.user.color);
				return (
          <div key={msg._id}>
            <p><span className={msg.user.color}>{msg.user.name}</span>: {msg.text}</p>
          </div>
        );
      });
    }
    return (
      <section id="messages">
        <SimpleBar style={{ height: 'auto', width: '100%' }}>
          <div className="msgs">
            {msgs}
          </div>
        </SimpleBar>
      </section>
    );
  }
}

export default Messages;
