import React, { Component } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

require('./messages/simpleBar.scss');

import Con from './Con';
import Header from './userlist/Header';
import Wrap from './userlist/Wrap';
import Search from './userlist/Search';
import List from './userlist/List';

require('./userlist/styles.scss');

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
			s: [
					{s:'mods', l:'Moderators'},
					{s:'vips', l:'Vips'},
					{s:'users',l:'Users'}
				]
    };
		this.close = this.close.bind(this);
    this.getList = this.getList.bind(this);
    this.constList = this.constList.bind(this);
  }

	searchList() {
		
	}

  getList(list, x) {	
		return (
			<section className="userList" key={`userList${x}`}>
				<h5>{list.l}</h5>
				<List list={this.props[list.s]}/>
			</section>	
		)
  }

  constList() {
		let list = this.state.s.map((list, x) => {
			return this.getList(list, x);
		});
		return list;
	}

  close() {
    this.props.close('userVis');
  }

  render() {
    return (
      <Con>
        <Header close={this.close}/>  
					<Wrap>
						<Search type="search" placeholder="Filter"/>
					</Wrap>
					<Wrap>
						<SimpleBar style={{ height: 'auto', width: '100%' }}>
							{this.constList()}
      	  	</SimpleBar>
					</Wrap>
		 </Con>
    );
  }
}

export default UserList;
