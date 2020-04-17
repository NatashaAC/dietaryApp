import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Image } from 'react-native';

import RegisterForm from '../../../forms/registerform';

export default class RegisterScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={{color: '#E78200', fontSize: 25, textAlignVertical: 'top'}}>Create an Account</Text>
          <Image style={styles.logo} resizeMode='contain' source={require('../../../../assets/mini_logo2.png')}></Image>
          <RegisterForm />
          <View style={{width: 250, height: 50}}>
            <Button
                title= 'Next'
                onPress= {
                  () =>
                  this.props.navigation.navigate('Health')
                }
                color='#74D14C'
            ></Button> 
          </View>
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
    justifyContent: 'center'
  },
  signupContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 600, 
    width: 330
  },
  logo: {
    position: 'relative',
    width: 350,
    height: 150
  },
});