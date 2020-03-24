import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class RecipeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>This is where you can search for recipes</Text>
      </ScrollView>
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