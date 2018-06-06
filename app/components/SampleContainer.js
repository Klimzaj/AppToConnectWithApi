import React, { Component } from 'react';
import Button from 'material-ui';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import Content from './Content';

class _SampleContainer extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>

        <Navi title="Sample"/>
        
        <div style={{display:"flex"}}>
          <Menu/>
          <Content 
            title={this.state.sample.title} 
            subtitle={this.state.sample.subtitle}
            text={this.state.sample.text}
            style={{margin:'10px'}}
          />
        </div>
        
      </div>
    );
  }
}

const SampleContainer = Container.create(_SampleContainer);
export default SampleContainer;
