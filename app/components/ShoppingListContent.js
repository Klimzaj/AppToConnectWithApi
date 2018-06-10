import React, { Component } from 'react';
import Button from 'material-ui/Button';
import axios from 'axios';
import PropTypes from 'prop-types'; 

class ShoppingListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          obj: '',
          shields: [],
          swords: []
        };
        this.takeShoppingElement = this.takeShoppingElement.bind(this);
        // this.takeInfo = this.takeInfo.bind(this);
        this.returnShieldElement = this.returnShieldElement.bind(this);
        this.returnSwordElement = this.returnSwordElement.bind(this);
        this.aa = this.aa.bind(this);
        this.takeShoppingElement(this.props.id) 
        // console.log("ccc")
        // this.returnShieldElement()
        // this.returnSwordElement()
      }

    takeShoppingElement= (url) => {
        const self = this;
        // console.log("shopping")
        axios.get(`http://localhost:3000/api/shopping/${url}`)
        .then(function (response) {
            const result = response.data.data.shopping;
            self.setState({obj: result});
            // for (let i = 0; i < self.state.obj.length; i +=1) {
              for (let i = 0; i < result.length; i +=1) {
              // console.log('xxxx')
              if(result[i].sh_id)
              {
                const url = result[i].sh_id
                axios.get(`http://localhost:3000/api/shield/${url}`)
                .then(function (response) {
                  let result = response.data.data.shields
                  // console.log(result)
                  self.setState({shields: result});
                })
                .catch(function (error) {
                  console.log(error);
                });
              }
              if(result[i].sw_id)
                {
                  const url = result[i].sw_id
                  axios.get(`http://localhost:3000/api/sword/${url}`)
                  .then(function (response) {
                    let result = response.data.data.swords;
                    // console.log(result)
                    self.setState({swords: result});
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }
            }
            // console.log(result)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    // takeInfo = (url) => {
    //   const self = this;
    //   axios.get(`http://localhost:3000/api/shopping/${url}`)
    // .then(function (response) {
    //   let result = response.data.data.shopping;
    //   self.setState({obj: result[0]});
    //   console.log(result[0])
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // }
    returnShieldElement =()=>{
      const self = this;
      // console.log("ddd")
      // console.log(this.state.obj)
      for (let i = 0; i < self.state.obj.length; i +=1) {
        // console.log('xxxx')
        if(this.state.obj[i].sh_id)
        {
          const url = this.state.obj[i].sh_id
          axios.get(`http://localhost:3000/api/shield/${url}`)
          .then(function (response) {
            let result = response.data.data.shields
            // console.log(result)
            self.setState({shields: result});
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
    }
    returnSwordElement = () => {
      const self = this
      for (let i = 0; i < self.state.obj.length; i +=1) {
        if(this.state.obj[i].sw_id)
        {
          const url = this.state.obj[i].sw_id
          axios.get(`http://localhost:3000/api/sword/${url}`)
          .then(function (response) {
            let result = response.data.data.swords;
            // console.log(result)
            self.setState({swords: result});
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
    }
    renderShields = (obj) => {
      return <p><b>Shield</b>  Name: {obj.name}, def: {obj.def} cost: {obj.cost}</p>
    }
    mapShields = (obj) => obj.map(this.renderShields);

    renderSwords = (obj) => {
      return <p><b>Weapon</b>  Name: {obj.name}, dmg: {obj.dmg} cost: {obj.cost}</p>
    }
    mapSwords = (obj) => obj.map(this.renderSwords);

    aa = () => {
      // console.log(this.state.obj)
      console.log(this.state.shields)
    }
    componentWillMount = ()=> {
      // console.log("aaa");
      // this.takeShoppingElement(this.props.id)
      // this.returnShieldElement();
      // this.returnSwordElement();
    }
    componentDidMount=()=> { 
      // console.log("bb")
      // this.takeShoppingElement(this.props.id)
      // this.returnShieldElement();
      // this.returnSwordElement();
    }
  render() {
    return (
      // this.returnShieldElement(), //ciagle odtwarzanie
      // this.returnSwordElement(),
    <div>
      <li style = {this.props.style} >
            <p><b>{this.props.login}</b></p>    
            {/* <p>{this.props.id}</p> */}
            {/* {this.returnShopElement()} */}
            {this.mapShields(this.state.shields)}
            {this.mapSwords(this.state.swords)}
            {/* <Button onClick={this.aa}>myObj</Button> */}
        </li>
      </div>
    );
  }
}

ShoppingListContent.propTypes = {
  login: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default ShoppingListContent;
