import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';


class AddPlayerContent extends Component {
  static getStores() {
    return [SampleStore];
}

static calculateState() {
    return {
        sample: SampleStore.getState()
    };
}
constructor(props) {
    super(props);
    this.state = {
      login: '',
      goodLog: false,
      password: ''
    };
    this.updateLogin = this.updateLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.aj = this.aj.bind(this);
    this.toHex = this.toHex.bind(this);
    this.isLogin = this.isLogin.bind(this);
    this.divStyle = {
      marginLeft: '50px'
    };
  }
  updateLogin = (e) =>  {
    const newLogin = document.getElementById('login-input').value; 
    this.setState({ login: e.target.value });
    // this.isLogin(newLogin)
    this.isLogin(newLogin)
  }

  isLogin = (url) => {
    // let url = 'http://localhost:3000/api/islogin/'.concat(this.state.login)
    // console.log(`http://localhost:3000/api/islogin/"${url}"`)
    const self = this
    axios.get(`http://localhost:3000/api/islogin/${url}`)
    .then(function (response) {
      let result = response.data.data;
      // console.log(result.player.length)
      if(result.player.length == 0)
      {
        self.setState({goodLog: true});
      }
      else self.setState({goodLog: false});
    })
    .catch(function (error) {
      console.log(error);
      self.setState({goodLog: false});
    })
  }
  //funkcje ktora wyszarza input hasla jesli nie ma dobrego loginu
  updatePassword = (e) =>  {
    if (this.state.goodLog === true)
    {
      // console.log(e.target.value.length)
      if(e.target.value.length >= 5)
      {
        this.setState({ password: e.target.value });
      }
      else{
        console.log('za krotkie');
        e.target.value = '';
      }
    }
    else console.log("Login istnieje!")
  }
  toHex = (str) => {
    const arr = [];
    for (let i = 0, l = str.length; i < l; i++) {
      const hex = Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
    return arr.join('');
  }
    // const newPassword = document.getElementById('password-input').value; 
    
    // console.log(newPassword)

  
  
  // handleChange = (e) => {
  //   this.setState({inputValue: e.target.value});
  // }
  aj() {
    if(this.state.login !== '' && this.state.password !== '')
    {
      const obj = {
        login: this.state.login,
        password: this.toHex(this.state.password)
      }
      // console.log(obj)
      SampleActionCreator.action004(obj);
      alert('Dodal gracza!')
    }
    else {
      console.log("nie dodal!");
    }
  }

  createPlayer = (player) => {
    // console.log(player.login)
    // return <PlayerContent style={{margin:"10px"}} login={player.login} />
}

allPlayers = (players) => players.map(this.createPlayer);

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Zarejestruj!</h1>
        <TextField
          id="login-input"
          label="Login"
          type="text"
          margin="normal"
          // value = {this.state.login}
          // onChange={this.aj}
          onBlur={this.updateLogin}
        />
        <br/>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          margin="normal"
          onBlur={this.updatePassword}
        />
        <br/>
        <Button color="secondary" onClick={this.aj}>
          Add me!
        </Button>
      </div>
    );
  }
}


export default AddPlayerContent;
