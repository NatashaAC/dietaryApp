import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import CustomButton from '../onboarding/button';

export default class OnboardingScreens extends Component {
    render() {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#EAF8E4',
                        image: <Image source={require('../../assets/logo.png')} ></Image>,
                        subtitle: 'Having trouble finding a recipe that suits your needs? Nutridish can help with that.'
                    }
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
   slide: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#EAF8E4'
   },
   bg: {
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FFF',
       height: 450,
       width: 320
   },
   logo: {
       resizeMode: 'contain',
       width: 500,
       height: 250
   },
   text: {
       color: '#000',
       fontSize: 16,
       marginHorizontal: 30,
       textAlign: 'center'
   }
});