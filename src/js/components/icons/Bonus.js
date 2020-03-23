import React, { Component } from 'react';

class Icon extends Component {
  constructor() {
    super();
  }
  render() {
    return (
		<div className="giftWobble">
			<svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
				<g>
					<path fillRule="evenodd" d="M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z" clipRule="evenodd"></path>
				</g>
			</svg>
		</div>
    );
  }
}

export default Icon;
