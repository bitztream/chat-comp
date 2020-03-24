import React, { Component } from 'react';

class Icon extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <svg fill="#efeff1" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
        <g>
          <path fillRule="evenodd" d="M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd">
          </path>
          <path d="M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z"></path>
        </g>
      </svg>
    );
  }
}

export default Icon;