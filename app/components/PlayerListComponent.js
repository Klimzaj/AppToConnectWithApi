import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import PlayerListContent from './PlayerListContent';
import SampleActionCreator from '../actions/SampleActionCreators';
import { List } from 'material-ui';

class _PlayerListContainer extends Component {
    static getStores() {
        // SampleActionCreator.action008();
        return [SampleStore];
    }
    
    static calculateState() {
        
        return {
            sample: SampleStore.getState()
        };
    }
    constructor(props) {
        super(props);
        SampleActionCreator.action008();
    }
    createPlayerList = (player) => {
        return <PlayerListContent style={{margin:"10px"}} obj={player} />
    }

    allPlayers = (players) => players.map(this.createPlayerList);
    
    handleClick = (e) => {
        // SampleActionCreator.action008();
        // console.log(this.state.sample.info);
    }
    
    componentDidMount() {
    }
  render() {
    return (
      <div>
        <Navi title="Lista graczy:"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <div>
            <h1>Lista graczy: </h1>
            <br/>
            <ul>
            {this.allPlayers(this.state.sample.info)}
            </ul>
          </div>
          {/* <Button onClick={this.handleClick}>myObj</Button> */}
        </div>
      </div>
    );
  }
}

const PlayerListContainer = Container.create(_PlayerListContainer);
export default PlayerListContainer;