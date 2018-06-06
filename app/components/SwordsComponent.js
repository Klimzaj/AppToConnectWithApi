import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import SwordContent from './SwordContent';
import SampleActionCreator from '../actions/SampleActionCreators';

class _SwordsComponent extends Component {
    static getStores() {
        // SampleActionCreator.action005();
        return [SampleStore];
    }
    
    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }
    constructor(props) {
        super(props);
        SampleActionCreator.action005();
    }
    createSword = (sword) => {
        // console.log(sword)
        return <SwordContent style={{margin:"10px"}} name={sword.name} cost={sword.cost} dmg={sword.dmg} />
    }

    allSwords = (swords) => swords.map(this.createSword);
    
    // handleClick = (e) => {
    //     SampleActionCreator.action005();
    // }
    
    componentDidMount() {
        
    }
  render() {
    return (
      <div>
        <Navi title="Lista broni:"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <ul>
          {
            //   console.log(this.state.sample.swords)
            //   console.log(this.state.sample.shields)
                  this.allSwords(this.state.sample.swords)
            }
          </ul>
        </div>
      </div>
    );
  }
}

const SwordsComponent = Container.create(_SwordsComponent);
export default SwordsComponent;