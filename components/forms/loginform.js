import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text, Button } from 'react-native';

import Firebase from '../config/Firebase';

export default class LoginForm extends Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  loginUser = (email, password) => {
    try {
      Firebase.auth().signInWithEmailAndPassword(email, password).this(function(user) {
        console.log(user);
      });
    }
    catch(error) {
      Console.log(error.toString());
    }
  }

    render() {
      return (
        <View style={styles.container}>
          <TextInput style={styles.input}
              autoCapitalize="none"
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              keyboardType= 'email-address'
              returnKeyType= "next"
              placeholder= "Email"
              placeholderTextColor= 'lightgray'
              onChangeText={(email) => this.setState({ email })}>
          </TextInput>
            
          <TextInput style={styles.input}
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              placeholder="Password" 
              placeholderTextColor= "lightgray"
              secureTextEntry
              onChangeText={(password) => this.setState({ password })}>
          </TextInput>

          <Button
            primary
            title= 'Login'
            rounded
            full
            onPress= { 
              () => 
              this.loginUser(this.state.email, this.state.password).props.navigation.navigate('HomeScreen')
              }>
          </Button>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    input: {
      height: 40,
      width: 200,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 2,
      marginBottom: 10,
      padding: 10,
      color: '#000'
    }
  });
  