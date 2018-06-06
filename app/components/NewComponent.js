import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from 'material-ui/Button';
import axios from 'axios';
import SampleActionCreator from '../actions/SampleActionCreators';

class Content extends Component {
  handleClick = (e) => {
    
  }
  aClick = ()=>{
  //   axios.get('http://localhost:3000/api/players')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // // });
  //   axios.post('http://localhost:3000/api/players', {
  //     login: 'b',
  //     password: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    const obj = {
      login: 'wacek',
      password: 'aaaa'
    }
    SampleActionCreator.action004(obj);
    console.log("nowy czas")
  }
  
  render() {
    return (
      <div>
        
        <Button onClick={this.aClick()}>b</Button>
      </div>
    );
  }
}

Content.propTypes = {
  
}

export default Content;
