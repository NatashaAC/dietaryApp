import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Icon } from 'react-native-elements';

// import Firebase from '../../config/Firebase';

// var data = []
// var currentUser

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
        <Icon
        containerStyle={{alignSelf: 'center', justifyContent: 'center'}}
          size={250}
          name='heart'
          type='font-awesome'
          color='#f50' />
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
  }
});