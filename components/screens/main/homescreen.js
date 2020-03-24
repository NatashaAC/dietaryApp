import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

const screen = Dimensions.get('screen')

export default class HomeScreen extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <Text>Home Page</Text>
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