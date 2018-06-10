import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import ShoppingListContent from './ShoppingListContent';
import SampleActionCreator from '../actions/SampleActionCreators';

class _ShoppingListComponent extends Component {
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
        SampleActionCreator.action010();
    }
    createList = (shop) => <ShoppingListContent style={{margin:"10px"}} login={shop.login} id={shop.idp} /> 

    allShopping = (shops) => shops.map(this.createList);
    
    handleClick = (e) => {
        // SampleActionCreator.action010();
        // console.log(this.state.sample.id)
        // console.log(this.state.sample.loginsLength); // dodac length do listy uzytkownikow
    }
  render() {
    return (
      <div>
        <Navi title="Lista graczy:"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <ul>
          {this.allShopping(this.state.sample.id)}
          </ul>
          {/* <Button onClick={this.handleClick}>myObj</Button> */}
        </div>
      </div>
    );
  }
}

const ShoppingListComponent = Container.create(_ShoppingListComponent);
export default ShoppingListComponent;