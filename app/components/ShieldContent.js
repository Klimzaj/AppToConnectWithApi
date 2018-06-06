import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class ShieldContent extends Component {
  render() {
    return (
      <div>
        <li style = {this.props.style} >
            <p>Name: {this.props.name},    
                Def: {this.props.def},   
                Cost: {this.props.cost}
            </p>
        </li>
      </div>
    );
  }
}

ShieldContent.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
}

export default ShieldContent;
