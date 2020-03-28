import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';;

import { Header, SearchBar } from 'react-native-elements';
import Axios from 'axios';

export default class RecipeScreen extends Component {

  state = {
    searchRecipe: '',
    recipeData: {}
  }

  componentDidMount() {

    recipeSearch = () => {
      const recipeName = this.state.searchRecipe.toLowerCase();
  
      // API call
      const axios = require("axios");
  
      axios({
          "method":"GET",
          "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":"28ef96556amsh63000c2e224a8cfp1806e9jsn1a1938144972"
          },"params":{
          "number":"1",  // Number of recipes retrieved from the database
          "query": recipeName // User's input 
          }
          })
          .then((response)=>{
            console.log(response.data)
  
            // this.setState({
            //   recipeData: response.data
            // })
          })
          .catch((error)=>{
            console.log(error)
          })
    }

  }


  // renderContent = () => {
  //   if(this.state.recipeData) {
  //   return <View><Text>{this.state.recipeData.title}</Text></View>
  //   } else {
  //     console.log('Recipe not found')
  //   }
  // }

  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C'
          }} 
          centerComponent={{ text: 'Recipes', style: { color: '#fff'}}}
          rightComponent={{ icon: 'menu', color: '#fff'}}
        />
        <SearchBar
          containerStyle={{
            backgroundColor: '#74D14C',
          }}
          inputContainerStyle={{
            backgroundColor: '#FFFFF3'
          }}
          placeholder='Search for a recipe...'
          platform= 'default'
          value={this.state.searchRecipe}
          onChangeText={(searchRecipe) => this.setState({ searchRecipe })}
          returnKeyType='search'
          onSubmitEditing={this.recipeSearch}
          recipeSearch = {this.recipeSearch}
           />
           {/* {this.renderContent()} */}
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