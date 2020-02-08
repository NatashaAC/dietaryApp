import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import RegisterForm from '../../forms/registerform';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is where you can sign up</Text>
        <RegisterForm />
        <Button
            title= 'LOGIN'
            onPress= {
              () =>
              this.props.navigation.navigate('Login')
            }>
        </Button> 
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