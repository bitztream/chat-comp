import React, { Component } from 'react';

import PurpleButton from '../../global/PurpleButton';
import TealButton from '../../global/TealButton';
import PointButton from '../../global/PointButton';
import Button from '../../global/Button';

import ChannelPoints from '../../icons/ChannelPoints';
import Bonus from '../../icons/Bonus';
import Settings from '../../icons/Settings';

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
				<div className="buttonCon">
        	<PointButton>
          	<ChannelPoints/>
						<span>1.4K</span>
        	</PointButton>
					<TealButton>
						<Bonus/>
					</TealButton>
					<div></div>
					<Button>
						<Settings/>
					</Button>
					<PurpleButton>
						Chat
					</PurpleButton>
					</div>
      </section>
    );
  }
}

export default Input;                         
