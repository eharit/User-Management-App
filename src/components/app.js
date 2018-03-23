import React, { Component } from 'react';

import Search from './search';
import UserList from './user_list';
import UserDetails from './user_details';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <hr />
        <UserList />
        <hr />
        <UserDetails />
      </div>
    );
  }
}
