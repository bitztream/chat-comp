import React, { Component } from 'react';

class Tool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: {}
    };

    this.pos = this.pos.bind(this);
  }

  componentDidMount() {
  
  }

  pos(event) {
    this.setState(() => {
      return {
      };
    });
  }

  render() {
    var compStyle = this.state.pos;
    return (
      <div className=`toolTip${}` style={compStyle}>
        {this.props.content}
      </div>
    );
  }
}

export default Tool;
