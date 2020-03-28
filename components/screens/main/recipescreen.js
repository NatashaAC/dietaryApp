import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';;

export default class RecipeScreen extends Component {
  render() {
    return (
      <View>
        <Text>RecipeScreen</Text>
      </View>
    );
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