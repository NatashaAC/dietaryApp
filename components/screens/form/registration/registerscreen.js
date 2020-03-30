import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView } from 'react-native';

import RegisterForm from '../../../forms/registerform';

export default class RegisterScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
        <View style={styles.signupContainer}>
          <Text>Create an Account</Text>
          <RegisterForm />
          <Button
              title= 'Next'
              onPress= {
                () =>
                this.props.navigation.navigate('Health')
              }
              color='#74D14C'
          ></Button> 
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
    backgroundColor: '#EAF8E4'
  },
  signupContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 600, 
    width: 330
  }
});