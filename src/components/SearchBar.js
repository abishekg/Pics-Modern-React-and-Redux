import React, { Component } from 'react'

export class SearchBar extends Component {

  state = {
    searchBarText: 'asdfas'
  }

  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} value={this.state.searchBarText} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
