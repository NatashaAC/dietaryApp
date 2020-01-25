import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginForm from '../../forms/loginform';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is where you login</Text>
        <LoginForm />
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