import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('clikc', this.handleClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggle();
    }
  };

  handleClick = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.toggle();
    }
  };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
