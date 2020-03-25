import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';

import Firebase from '../config/Firebase';

export default class RegisterForm extends Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try {
      if(this.state.password.length < 6) {
        alert("Please enter atleast 6 charatcers!")
        return;
      }

      Firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error) {
      console.log(error.toString());
    }
  }

    render() {
      return (
        <View style={styles.container}>
            {/* <TextInput style={styles.input}
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              keyboardType= 'first-name'
              returnKeyType= "next"
              placeholder= "First Name"
              placeholderTextColor= 'lightgray'>
          </TextInput>
          
          <TextInput style={styles.input}
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              keyboardType= 'last-name'
              returnKeyType= "next"
              placeholder= "Last Name"
              placeholderTextColor= 'lightgray'>
          </TextInput> */}

          <TextInput style={styles.input}
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
            success
            title= 'Sign Up'
            rounded
            full
            onPress= { 
              () => 
              this.signUpUser(this.state.email, this.state.password) 
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
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      color: '#000'
    }
  });