import React, { Component } from 'react';

import Unl from './Unl';
import UserLink from './UserLink';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = this.props.list.map((user, x)=>{
      return (
				<li key={`userList${user._id}`}>
					<UserLink href={user.url}>
						{user.name}
					</UserLink>
				</li>
			);
    });
    return (
      <Unl>
        {list}
      </Unl>
    );
  }
}

export default List;
