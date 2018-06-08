import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class SwordContent extends Component {
  render() {
    return (
      <div>
        <li style = {this.props.style} >
            <p>Name: <b>{this.props.name}</b>,    
                Dmg: <b>{this.props.dmg}</b>,   
                Cost: <b>{this.props.cost}</b>
            </p>
        </li>
      </div>
    );
  }
}

SwordContent.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  dmg: PropTypes.number.isRequired,
}

export default SwordContent;
