import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';;

import { Header, SearchBar, Card, Image } from 'react-native-elements';
import SearchBody from '../../search/searchbody';

export default class RecipeScreen extends Component {

  state = {

    searchRecipe: '',
    recipeData: {},
    recipeFound: false

  }

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
          
          var data = response.data.results[0] ? response.data.results[0] : false
          this.setState({
            recipeData: data,
            recipeFound: true
          })

        })
        .catch((error)=>{

          this.setState ({
            recipeFound: false
          })

          console.log(error);

        })
  }

  renderContent = () => {
    if(this.state.recipeData) {
    return  <SearchBody recipeData={this.state.recipeData} />

    } else {

      console.log('Recipe not found')

    }
  }

  render() {
    return (
      <ScrollView>
        <Header
          containerStyle={{
            backgroundColor: '#74D14C',
            height: 60,
            paddingVertical: 25
          }} 
          centerComponent={{ text: 'RECIPES', style: { color: '#fff'}}}
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
           {this.renderContent()}
      </ScrollView>
    );
  }
}