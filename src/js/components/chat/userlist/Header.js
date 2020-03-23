import React, { Component } from 'react';

import Button from '../../global/Button';

import Close from '../../icons/Close';

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
      <section className="userListHeader">
        <Button onClick={this.props.close}>
          <Close/>
        </Button>
        <header>
					<h3>
						Users In Chat
					</h3>
				</header> 
      </section>
    );
  }
}

export default Header;
