import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Screens extends Component {
    render() {
        return (
            <View style={styles.slide, {backgroundColor: '#EAF8E4'}}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
                <Text style={styles.text}>Having trouble finding a recipe that suits you, don't worry Nutridish can you with that.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   slide: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   logo: {
       resideMode: 'contain',
       position: 'absolute',
       width: 500,
       height: 250
   },
   text: {
       color: '#000',
       fontFamily: 'Avenir',
       fontSize: 18,
       marginHorizontal: 40,
       textAlign: 'center'
   }
});