import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';

import Screens from '../onboarding/onboardingscreen';

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