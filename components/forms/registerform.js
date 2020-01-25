import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

export default class RegisterForm extends Component {

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
              placeholderTextColor= 'lightgray'>
          </TextInput>
            
          <TextInput style={styles.input}
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              placeholder="Password"
              placeholderTextColor= "lightgray"
              secureTextEntry>
          </TextInput>
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