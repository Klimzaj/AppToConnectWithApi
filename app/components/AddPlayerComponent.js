import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import Menu from './Menu';
import AddPlayerContent from './AddPlayerContent';

// po co mi to cos i co ma to tu robic

class _AddPlayersContainer extends Component {
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
            <AddPlayerContent/>          
            </div>
        </div>
        );
    }
}

const AddPlayersContainer = Container.create(_AddPlayersContainer);
export default AddPlayersContainer;