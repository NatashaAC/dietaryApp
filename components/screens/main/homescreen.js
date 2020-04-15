import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Header, Icon } from 'react-native-elements';

// const screen = Dimensions.get('screen')

export default class HomeScreen extends Component {

  // state = {

  //   getFact: {}

  // }

  render() {

    // const axios = require("axios");

    // axios({
    //     "method":"GET",
    //     "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //     "x-rapidapi-key":"28ef96556amsh63000c2e224a8cfp1806e9jsn1a1938144972"
    //     }
    //     })
    //     .then((response)=>{
    //       var data = response.data
    //       getFact = data

    //       console.log(response.data)
    //     })
    //     .catch((error)=>{
    //       console.log(error)
    //     })

    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C',
            height: 60,
            paddingVertical: 25
          }} 
          centerComponent={{ text: 'HOME', style: { color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
        {/* <Text>{this.state.getFact.text}</Text> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 15,
    textAlign: 'center'
  }
});