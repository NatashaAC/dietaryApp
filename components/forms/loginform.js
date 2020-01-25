import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class LoginForm extends Component {

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
      borderColor: 'gray',
      borderWidth: 2,
      marginBottom: 10,
      padding: 10,
      color: '#000'
    }
  });
  