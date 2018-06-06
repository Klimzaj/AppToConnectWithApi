import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';

class Menu extends Component {
  render() {
    return (
      <List style={{width: '15%'}}>
        <ListSubheader>Menu</ListSubheader>
        <ListItem component={Link} to="/players">PlayerList</ListItem>
        <ListItem component={Link} to="/addplayer">AddPlayer</ListItem>
        <ListItem component={Link} to="/swords">WeaponList</ListItem>
        <ListItem component={Link} to="/shields">ShieldList</ListItem>
      </List>
    );
  }
}

export default Menu;
