import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types'; 
import SampleActionCreator from '../actions/SampleActionCreators'; 

class ShopElementContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    buyS = () => {
        // update coin w detail player
        if(this.props.obj.coin >= this.props.obj.cost)
        {
            if(this.props.obj.type === "Shield") 
            {
                const a = {
                    p_id: this.props.obj.p_id,
                    sh_id: this.props.obj.d_id
                }
                SampleActionCreator.action013(a);
                const b = {
                    p_id: this.props.obj.p_id,
                    coin: this.props.obj.coin - this.props.obj.cost
                }
                SampleActionCreator.action014(b);
                alert("kupiono tarcze")
                
            }
            else
            {
                const a = {
                    p_id: this.props.obj.p_id,
                    sw_id: this.props.obj.d_id
                }
                SampleActionCreator.action012(a);
                const b = {
                    p_id: this.props.obj.p_id,
                    coin: this.props.obj.coin - this.props.obj.cost
                }
                SampleActionCreator.action014(b);
                alert("kupiono miecz")
                
            }
        }
        else
        {
            alert("Za drogie")
        }
    }
    
    render() {
        return (
            <div>
                <p><b>{this.props.obj.type}</b>  Name: <b>{this.props.obj.name}</b>, {this.props.obj.d}: <b>{this.props.obj.dval}</b> cost: <b>{this.props.obj.cost}</b>
                <Button onClick={this.buyS}>Buy</Button> 
                </p>
            </div>
        );
    }
}

ShopElementContent.propTypes = {
//   obj: PropTypes.string.isRequired,
}

export default ShopElementContent;
