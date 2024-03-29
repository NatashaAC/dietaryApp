import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';

import Firebase from '../config/Firebase';

export default class RegisterForm extends Component {

  constructor(props){
    super(props)

    this.state = ({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  }

  signUpUser = () => {
    try {
      if(this.state.password.length < 6) {
        alert("Fields are blank and please enter atleast 6 charatcers!")
        return;
      }
      Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }
    catch(error) {
      console.log(error.toString());
    }
  }

  writeUserData(firstname, lastname, email) {
    Firebase.database().ref('users/').push({
      firstname,
      lastname,
      email
    }).then((data) => {
      console.log('data', data);
    }).catch((error) => {
      console.log('error', error);
    })
  }

    render() {
      return (
        <View style={styles.container}>
          <TextInput style={styles.input}
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              keyboardType= 'first-name'
              returnKeyType= "next"
              placeholder= "First Name"
              placeholderTextColor= 'lightgray'
              onChangeText={(firstname) => this.setState({ firstname })}
              value={this.state.firstname}
              >
          </TextInput>
          
          <TextInput style={styles.input}
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              keyboardType= 'last-name'
              returnKeyType= "next"
              placeholder= "Last Name"
              placeholderTextColor= 'lightgray'
              onChangeText={(lastname) => this.setState({ lastname })}
              value={this.state.lastname}
              >
          </TextInput>

          <TextInput style={styles.input}
              onSubmitEditing= { () => this.passwordInput.focus()}
              autoCorrect= {false}
              autoCapitalize='none'
              keyboardType= 'email-address'
              returnKeyType= "next"
              placeholder= "Email"
              placeholderTextColor= 'lightgray'
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}>
          </TextInput>
            
          <TextInput style={styles.input}
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              autoCapitalize='none'
              placeholder="Password"
              placeholderTextColor= "lightgray"
              secureTextEntry
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}>
          </TextInput>

          <Button
            success
            title= 'Sign Up'
            color='#74D14C'
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
      width: 250,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      color: '#000'
    }
  });