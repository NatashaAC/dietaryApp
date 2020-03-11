import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount () {

    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1")
    .then( (response) => response.json() )
    .then( (responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.recipes,
      })
    })
    .catch((error) => {
      console.log(error) 
    });

  }

  render() {

    if (this.state.isLoading) {

      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      return (
        <View>
          <Text>Content Loaded</Text>
        </View>
      );
    }
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