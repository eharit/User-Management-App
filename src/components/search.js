import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' };
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  render () {
    return (
      <form>
        <input value={this.state.term}
          onChange={this.onInputChange.bind(this)} />
        <button className="btn btn-outline-priamry">Search</button>
      </form>
    )
  }
}

export default Search;
