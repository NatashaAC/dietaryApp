import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

const screen = Dimensions.get('screen')

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, 
      dataSource: null
    }
  }

  componentDidMount () {

    return fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%252Cdessert", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "28ef96556amsh63000c2e224a8cfp1806e9jsn1a1938144972"
    }
    })
    .then(response => {
      this.setState({
        isLoading: false,
        dataSource: response.recipes,
      })
    })
    .catch(err => {
      console.log(err);
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

      let recipes = this.state = dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
              <Text>{val.title}</Text>
        </View>
      });

      return (
        <View>
          {recipes}
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