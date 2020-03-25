import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { Header } from 'react-native-elements';

// const screen = Dimensions.get('screen')

export default class HomeScreen extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <Header>
          <Text>Hello, User!</Text>
        </Header>
        <View>
          <Text>Recommendations</Text>
        </View>
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