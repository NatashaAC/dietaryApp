import React, { Component} from 'react';
import { StyleSheet, Text, View, ImagePickerIOS } from 'react-native';

import { Header } from 'react-native-elements';

export default class SavedRecipeScreen extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C'
          }} 
          centerComponent={{ text: 'Favourite', style: { color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
      </View>
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