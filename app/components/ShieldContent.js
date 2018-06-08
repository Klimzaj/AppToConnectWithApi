import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class ShieldContent extends Component {
  render() {
    return (
      <div>
        <li style = {this.props.style} >
            <p>Name: <b>{this.props.name}</b>,    
                Def: <b>{this.props.def}</b>,   
                Cost: <b>{this.props.cost}</b>
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
