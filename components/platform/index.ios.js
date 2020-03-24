import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';

export default class Onboarding extends Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }
    
    render() {
        return (
            <Screens />
        );
    }
}

AppRegistry.registerComponent('Onboarding', () => Onboarding);