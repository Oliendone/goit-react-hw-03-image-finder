import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  };

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
