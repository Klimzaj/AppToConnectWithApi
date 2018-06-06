import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import PlayerContent from './PlayerContent';
import SampleActionCreator from '../actions/SampleActionCreators';
import { List } from 'material-ui';

class _PlayersContainer extends Component {
    static getStores() {
        SampleActionCreator.action003();
        return [SampleStore];
    }
    
    static calculateState() {
        
        return {
            sample: SampleStore.getState()
        };
    }
    constructor(props) {
        super(props);
        SampleActionCreator.action003();
    }
    createPlayer = (player) => {
        return <PlayerContent style={{margin:"10px"}} login={player.login} />
    }

    allPlayers = (players) => players.map(this.createPlayer);
    
    handleClick = (e) => {
        SampleActionCreator.action003();
        // console.log(this.state.sample.loginsLength); // dodac length do listy uzytkownikow
    }
    
    componentDidMount() {
    }
  render() {
    return (
      <div>
        <Navi title="Lista graczy:"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <ul>
          {this.allPlayers(this.state.sample.logins)}
          </ul>
          {/* <Button onClick={this.handleClick}>myObj</Button> */}
        </div>
      </div>
    );
  }
}

const PlayersContainer = Container.create(_PlayersContainer);
export default PlayersContainer;