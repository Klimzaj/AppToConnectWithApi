import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import AddShopContent from './AddShopContent';


class _AddShopContainer extends Component {
    static getStores() {
        return [SampleStore];
        
    }
    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }
    render() {
        return (
        <div>
            <Navi title="Dodaj gracza:"/>
            <div style={{display:"flex"}}>
            <Menu/>
            <AddShopContent/>          
            </div>
        </div>
        );
    }
}

const AddShopContainer = Container.create(_AddShopContainer);
export default AddShopContainer;