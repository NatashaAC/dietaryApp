import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Button from '../onboarding/button';
import Swiper from '../onboarding/swiper';

export default class Screens extends Component {
    render() {
        return (
            
                <View style={styles.slide}>
                    <View style={styles.bg}>
                        <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
                        <Text style={styles.text}>Having trouble finding a recipe that suits you, don't worry Nutridish can help you with that.</Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.bg}>
                        <Text style={style.headerText}>How to Use the App</Text>
                        <Text style={styles.text}>Having trouble finding a recipe that suits you, don't worry Nutridish can help you with that.</Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.bg}>
                        <Text >Let's Get Started</Text>
                        <Text style={styles.text}>Having trouble finding a recipe that suits you, don't worry Nutridish can help you with that.</Text>
                    </View>
                </View>
                <Button title='Continue'  />
            
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