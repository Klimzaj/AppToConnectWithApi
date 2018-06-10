import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container } from 'flux/utils';
import ShopElementContent from './ShopElementContent';
import SampleStore from '../stores/SampleStore';

class ShopContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swords: [],
            shields: [] 
        }

        this.aa = this.aa.bind(this);
        this.takeShields = this.takeShields.bind(this);
        this.takeSwords = this.takeSwords.bind(this);
        this.mapShields = this.mapShields.bind(this);
        this.mapSwords = this.mapSwords.bind(this);
        this.takeShields()
        this.takeSwords()
    }  
    takeSwords=()=>{
        const self = this
        axios.get(`http://localhost:3000/api/swords`)
        .then(function (response) {
            const result = response.data.data.swords
        //   console.log(result)
            self.setState({swords: result});
        })
        .catch(error=> {
            console.log(error);
        });
    }
    takeShields=()=>{
        const self = this
        axios.get(`http://localhost:3000/api/shields`)
        .then(function (response) {
            const result = response.data.data.shields
        //   console.log(result)
            self.setState({shields: result});
        })
        .catch(error => {
            console.log(error);
        });
    }
    aa=()=>{
        // console.log(this.state.shields)
    }

    mapSwords = (a) => a.map(this.renderS);
    mapShields = (a) => a.map(this.renderS);

    renderS =(obj)=>{
        // console.log(obj)
        //zwracac obiekt ktory cos sobie trzyma!!
        let type;
        let d;
        let d_id;
        let dval;
        if(obj.def) 
        {
            type = "Shield"
            dval = obj.def
            d = "def"
            d_id = obj.idsh
        }
        else{
            type = "Weapon"
            dval = obj.dmg
            d = "dmg"
            d_id = obj.idsw
        } 
        const a = {
            type: type,
            name: obj.name,
            dval: dval,
            d: d,
            d_id: d_id,
            cost: obj.cost,
            p_id: this.props.p_id,
            coin: this.props.coin
        }
        // console.log(a)
        return <ShopElementContent obj = {a} />
        // return <div><p><b>Weapon</b>  Name: <b>{obj.name}</b>, dmg: <b>{obj.dmg}</b> cost: <b>{obj.cost}</b><Button onClick={this.buySword}>Buy</Button> </p></div>
    }

    // renderShields =(obj)=>{
    //     return <div><p><b>Shield</b>  Name: <b>{obj.name}</b>, def: <b>{obj.def}</b> cost: <b>{obj.cost}</b><Button onClick={this.buyShield}>Buy</Button> </p></div>
    //   }
    
  render() {
    return (
      <div>
            <p><b>{this.props.login}</b>,    
                coin: <b>{this.props.coin}</b>,   
            </p>
            <div>
                <h3>Swords:</h3>    
                {this.mapSwords(this.state.swords)}
            </div>
            <div>
                <h3>Shields</h3>
                {this.mapShields(this.state.shields)}
                
            </div>
      </div>
    );
  }
}

ShopContent.propTypes = {
  login: PropTypes.string.isRequired,
  coin: PropTypes.number.isRequired
}

export default ShopContent;