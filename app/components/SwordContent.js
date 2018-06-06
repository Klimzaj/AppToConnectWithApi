import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class SwordContent extends Component {
  render() {
    return (
      <div>
        <li style = {this.props.style} >
            <p>Name: {this.props.name},    
                Dmg: {this.props.dmg},   
                Cost: {this.props.cost}
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
