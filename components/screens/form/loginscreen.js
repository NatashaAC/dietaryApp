import React, { Component} from 'react';
import { StyleSheet, Image, View, Button, KeyboardAvoidingView } from 'react-native';

import LoginForm from '../../forms/loginform';

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
        <View style={styles.loginContainer}>
          <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/logo.png')}></Image>
        </View>
        <View>
          <LoginForm />
          <Button
              title= 'Sign Up'
              onPress= {
                () =>
                this.props.navigation.navigate('Register')
               }>
          </Button>
          <Button
          title='Home'
          onPress= {
            () =>
            this.props.navigation.navigate('Home')
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
  loginContainer:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: 500,
      height: 250
  },
});