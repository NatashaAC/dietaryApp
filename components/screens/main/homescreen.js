import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

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
        image: <Image source={require('../../../assets/hamburger.jpg')}></Image>,
        description: 'Delicous bacon and cheese hamburger with spicy mayo.'
      },
      {
        title: 'Pasta',
        image: <Image source={require('../../../assets/pasta.jpg')}></Image>,
        description: 'Creamy chicken alfredo.'
      },
      {
        title: 'Salad',
        image: <Image source={require('../../../assets/salad.jpg')}></Image>,
        description: 'Tasty onion, tomato, and feta cheese salad.'
      },
      {
        title: 'Sandwich',
        image: <Image source={require('../../../assets/sandwich.jpg')}></Image>,
        description: 'Roast beef sandwich with tomatoes.'
      }
    ]

    return (
      <ScrollView>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C',
            height: 60,
            paddingVertical: 25
          }} 
          centerComponent={{ text: 'HOME', style: { fontSize: 20, fontFamily: 'sans-serif', color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
        <Text style={styles.greetingTxt}>Hello, { currentUser && currentUser.email }!</Text>
        <Card style={styles.container} title='RECOMMENDED RECIPES'>
          {
            recipes.map((rec, i) => {
              return (
                <Card key={i}>
                  
                  <Text style={styles.titleTxt}>{rec.title}</Text>
                  <Text style={styles.paraTxt}>{rec.description}</Text>
                </Card>
              );
            })
          }
        </Card>
      </ScrollView>
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
  greetingTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#393939',
    padding: 10
  },
  titleTxt: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'monospace'
  },
  paraTxt: {
    fontSize: 14,
    textAlign: 'left',
    color: '#393939',
    fontFamily: 'serif'
  }
});