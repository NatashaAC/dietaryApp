import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

import { Card } from 'react-native-elements';

import Firebase from '../config/Firebase';

var currentUser;

export default class SearchBody extends Component {

    addToFav = async (recipeName) => {

        // Get the user that is currently logged in
        currentUser = await Firebase.auth().currentUser

        // Set a unique key
        var dbRef = await Firebase.database().ref(currentUser.uid).child('favourites').push()

        // Update recipe at the unique key
        dbRef.set({
            'name': recipeName
        })
    }

    render() {

        const recipeData = this.props.recipeData;

        return (
            <Card 
              title={recipeData.title}
            >
              <Image
                resizeMode='contain'
                source={{uri: recipeData.image}} style={{height: 150, width: 150}}>
              </Image>
              <Text>Ready in {recipeData.readyInMinutes} minutes</Text>
              <Button 
                title='Add to Favourites'
                onPress={
                    () => 
                    this.addToFav(recipeData)
                }>
              </Button>
            </Card>
        );
    }
}