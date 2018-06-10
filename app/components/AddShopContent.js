import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SampleStore from '../stores/SampleStore';
import SampleActionCreator from '../actions/SampleActionCreators';

class AddShopContent extends Component {
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
    this.state = {
      name: '',
      dval: '',
      cost: '',
      it: '',
      d: ''
    };
    this.updateName = this.updateName.bind(this);
    this.updateD = this.updateD.bind(this);
    this.updateCost = this.updateCost.bind(this);
    this.updateIt = this.updateIt.bind(this);

    this.aj = this.aj.bind(this);
    this.divStyle = {
      marginLeft: '50px'
    };
  }
  updateName = (e) =>  {
    this.setState({ name: e.target.value });
  }

  updateD = (e) =>  {
    this.setState({ dval: e.target.value });
  }
  updateCost = (e) =>  {
    this.setState({ cost: e.target.value });
}
updateIt = (e) => {
    this.setState({ it: e.target.value });
    if(e.target.value === 'sword')
    {
      this.setState({ d: 'dmg' });
    }
    else{
      this.setState({ d: 'def' });
    }
    
};
  aj() {
    if(this.state.name !== '' && this.state.d !== '' && this.state.cost !== '' && this.state.it)
    {
      const obj = {
        name: this.state.name,
        dval: this.state.dval,
        cost: this.state.cost,
        it: this.state.it,
        d: this.state.d
      }
      // console.log(obj)
      SampleActionCreator.action007(obj);
      alert('Dodał element')
    }
    else {
      console.log("nie dodal!");
    }
  }
  
  render() {
    return (
      <div style={this.divStyle}>
        <h1>Dodaj element do sklepu!</h1>
        <br/>
        <p>Chose element:</p>
        <select onChange={this.updateIt} name="shop">
            <option value="">None</option>
            <option value="sword">Sword</option>
            <option value="shield">Shield</option>
        </select>
        <br/>
        <TextField
          id="name-input"
          label="name"
          type="text"
          margin="normal"
          onBlur={this.updateName}
        />
        <br/>
        <TextField
          id="d-input"
          label="def/dmg"
          type="number"
          margin="normal"
          onBlur={this.updateD}
        />
        <br/>
        <TextField
          id="cost-input"
          label="cost"
          type="number"
          margin="normal"
          onBlur={this.updateCost}
        />
        <br/>
        <Button color="secondary" onClick={this.aj}>
          Add me!
        </Button>
      </div>
    );
  }
}


export default AddShopContent;
