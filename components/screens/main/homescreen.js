import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Header, Icon, Card } from 'react-native-elements';

import Firebase from '../../config/Firebase';

export default class HomeScreen extends Component {

  state = {

    currentUser: null

  }

  componentDidMount() {
    const { currentUser } = Firebase.auth()
    this.setState({ currentUser })
  }
 
  render() {

    const { currentUser } = this.state;

    const recipes = [
      {
        title: 'Hamburger',
        image: '../../../assets/hamburger.jpg',
        description: 'Delicous bacon and cheese hamburger with spicy mayo.'
      },
      {
        title: 'Pasta',
        image: '../../../assets/pasta.jpg',
        description: 'Creamy chicken alfredo.'
      },
      {
        title: 'Salad',
        image: '../../../assets/salad.jpg',
        description: 'Tasty onion, tomato, and feta cheese salad.'
      },
      {
        title: 'Sandwich',
        image: '../../../assets/sandwich.jpg',
        description: 'Roast beef sandwich with tomatoes.'
      }
    ]

    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C',
            height: 60,
            paddingVertical: 25
          }} 
          centerComponent={{ text: 'HOME', style: { fontSize: 20, fontFamily: 'sans-serif', color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
        <Text>Hello, { currentUser && currentUser.email }!</Text>
        <Card title='RECOMMENDED RECIPES'>
          {
            recipes.map((rec, i) => {
              <View key={i}>
                <Image
                  resizeMode='contain'
                  source={{uri: rec.image}}
                ></Image>
                <Text>{rec.title}</Text>
                <Text>{rec.description}</Text>
              </View>
            })
          }
        </Card>
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