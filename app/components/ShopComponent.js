import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import ShopContent from './ShopContent';
import SampleActionCreator from '../actions/SampleActionCreators';
import { List } from 'material-ui';

class _ShopComponent extends Component {
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
        SampleActionCreator.action011(this.props.match.params.id);
        

        this.aa = this.aa.bind(this);
        this.aaa = this.aaa.bind(this);
    }    
    aa = (obj) => {
        if(obj)
        {
            return  <ShopContent style={{margin:"10px"}} p_id={this.props.match.params.id} login={obj[0].login} coin={obj[0].coin} /> 
        }
    }
    aaa = () =>{
        // console.log(this.state.sample.player[0])
    }
  render() {
    return (
      <div>
        <Navi title="Shoping!"/>
        <div style={{display:"flex"}}>
            <Menu/>
            <div>
            {/* {console.log(this.state.sample.player[0])} */}
            {this.aa(this.state.sample.player)}
            {/* <Button onClick={this.aaa} >aaa</Button> */}
            </div>
        </div>
      </div>
    );
  }
}

const ShopComponent = Container.create(_ShopComponent);
export default ShopComponent;