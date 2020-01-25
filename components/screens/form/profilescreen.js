import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is where you can view your profile</Text>
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