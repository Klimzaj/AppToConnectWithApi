import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import ShieldContent from './ShieldContent';
import SampleActionCreator from '../actions/SampleActionCreators';

class _ShieldsContainer extends Component {
    static getStores() {
        // SampleActionCreator.action006();
        return [SampleStore];

    }
    
    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }
    constructor(props) {
        super(props);
        SampleActionCreator.action006();
    }
    createShield = (shield) => {
        return <ShieldContent style={{margin:"10px"}} name={shield.name} cost={shield.cost} def={shield.def} />
    }

    allShields = (shields) => shields.map(this.createShield);
    
    componentDidMount() {
    }
  render() {
    return (
      <div>
        <Navi title="Lista pancerzy:"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <ul>
          {this.allShields(this.state.sample.shields)}
          </ul>
        </div>
      </div>
    );
  }
}

const ShieldsComponent = Container.create(_ShieldsContainer);
export default ShieldsComponent;