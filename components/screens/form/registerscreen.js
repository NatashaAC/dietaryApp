import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView } from 'react-native';

import RegisterForm from '../../forms/registerform';

export default class RegisterScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
        <View>
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
      </KeyboardAvoidingView>
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