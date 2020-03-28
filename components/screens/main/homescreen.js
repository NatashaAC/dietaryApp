import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { Header, Icon } from 'react-native-elements';

// const screen = Dimensions.get('screen')

export default class HomeScreen extends Component {

  render() {
    return (
      <View>
        <Header
          barStyle='default '
          containerStyle={{
            backgroundColor: '#74D14C'
          }} 
          leftComponent={{ text: 'Home', style: { color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});