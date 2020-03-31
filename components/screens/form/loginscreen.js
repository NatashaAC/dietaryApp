import React, { Component} from 'react';
import { StyleSheet, Image, View, Text, Button, KeyboardAvoidingView } from 'react-native';

import LoginForm from '../../forms/loginform';

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
          <View style={styles.loginContainer}>
            <Text style={{color: '#E78200', fontSize: 25, textAlignVertical: 'top'}}>LOGIN</Text>
            <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/mini_logo.png')}></Image>
            <LoginForm />
            <Button
              title= 'Sign Up'
              onPress= {
                () =>
                this.props.navigation.navigate('Register')
              }
              color='#74D14C'
              
            ></Button>

            <Button
              title='Home'
              onPress= {
                () =>
                this.props.navigation.navigate('Tab')
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
    backgroundColor: '#EAF8E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 600, 
    width: 330
  },
  logo: {
    position: 'relative',
    width: 500,
    height: 250,
  },
  buttonStyle: {
    width: 250,
    height: 40
  }
});