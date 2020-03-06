import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state ={ isLoading: true }
  }

  componentDidMount() {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "28ef96556amsh63000c2e224a8cfp1806e9jsn1a1938144972"
      }
    }).then(response => {

      this.setState({
        isLoading: false,
        dataSource: response.recipes,
      }, function() {

      });
     
    }).catch(err => {

      console.log(err);

    });
  }
  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View>
        <FlatList 
        data={ this.state.dataSource }
        renderItem={ ({item}) => <Text>{item.recipes.title}</Text>}
        // keyExtractor={ ({id}, recipes) => id}
        >
        </FlatList>
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