import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import SampleActionCreator from '../actions/SampleActionCreators';

class PlayerListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          def: '',
          dmg: '',
          swName: '',
          shName: '',
          date: '',
          all: '',
          win: ''
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.takeInfo = this.takeInfo.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
        this.aj = this.aj.bind(this);
        this.takeAllWin = this.takeAllWin.bind(this);
        this.divStyle = {
        //   marginLeft: '50px',
          visibility: 'hidden',
          width: '0px',
          height: '0px'
        };
        this.takeInfo(this.props.obj.p_id);
        this.takeAllWin(this.props.obj.p_id);
      }
      handleClick = (e) => {
        let styleVis = document.getElementById(this.props.obj.login).style.visibility;
        document.getElementById(this.props.obj.login).style.height = (styleVis==='visible')?'0px':'auto';
        document.getElementById(this.props.obj.login).style.width = (styleVis==='visible')?'0px':'auto';
        document.getElementById(this.props.obj.login).style.visibility = (styleVis==='visible')?'hidden':'visible';
    }
      takeAllWin = (url) => {
        const self = this
        axios.get(`http://localhost:3000/api/allcount/${url}`)
        .then(function (response) {
        let result = response.data.data[0].ej;
            self.setState({all: result});
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get(`http://localhost:3000/api/wincount/${url}`)
        .then(function (response) {
        let result = response.data.data[0].ej;
            self.setState({win: result});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    takeInfo = (url) => {
        const self = this
        axios.get(`http://localhost:3000/api/idinfo/${url}`)
        .then(function (response) {
        let result = response.data.data.idInfo;
            // console.log(result[0])
            self.setState({def: result[0].def});
            self.setState({dmg: result[0].dmg});
            self.setState({swName: result[0].swordName});
            self.setState({shName: result[0].shieldName});
            self.setState({date: result[0].date});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    deletePlayer = () => {
      axios.post('http://localhost:3000/api/deleteplayer', {
      id: this.props.obj.p_id
    })
    .then(function (response) {
      alert("Gracz usuniety");
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    aj() {
      if(this.props.obj.p_id !== '' && this.props.obj.p_id !== 'undefinded')
      {
        const number = Math.random()
        let win
        if(number <= 0.5)
        {
          win = true;
        }
        else{
          win = false;
        }
        const obj = {
          id: this.props.obj.p_id,
          win: win
        }
        // console.log(obj)
        SampleActionCreator.action009(obj);
        window.location.reload(); //pobrac na nowo dane!
        alert('Gra przeprowadzona!')
      }
      else {
        // console.log("nie grales!");
      }
    }
    shopping = () => {

    }
  render() {
    return (
      <div>
        {/* {this.takeInfo(this.props.obj.p_id)} */}
        <li onClick={this.handleClick} style = {this.props.style} >
        {this.props.obj.login}
        </li>
        <div id={this.props.obj.login} style={this.divStyle}>            
            {/* {console.log(this.props.obj)} */}
            <p><b>Coins:</b> {this.props.obj.coin}</p>
            <p><b>Sword: </b></p>
            <p>Name: {this.state.swName}</p>
            <p>Damage: {this.state.dmg}</p>
            <p><b>Shield: </b></p>
            <p>Name: {this.state.shName}</p>
            <p>Defence: {this.state.def}</p>
            <p><b>Data create: </b> {this.state.date}</p>
            <p><b>Games: </b></p>
            <p>(All/Win): <b>{this.state.all}</b>/<b>{this.state.win}</b></p>
            <Button onClick={this.deletePlayer}>Delete</Button>
            <Button onClick={this.aj}>Let's play!</Button>
            
            <Link to={`/shop/${this.props.obj.p_id}`}>
              <Button>Go shopping!</Button>
            </Link>
        </div>
      </div>
    );
  }
}

// PlayerListContent.propTypes = {
//   name: PropTypes.string.isRequired,
// }

export default PlayerListContent;
