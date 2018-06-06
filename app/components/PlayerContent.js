import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class PlayerContent extends Component {
  render() {
    return (
      <div>
        <li style = {this.props.style} >{this.props.login}</li>
      </div>
    );
  }
}

PlayerContent.propTypes = {
  login: PropTypes.string.isRequired,
}

export default PlayerContent;
