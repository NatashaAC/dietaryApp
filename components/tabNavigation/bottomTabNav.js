import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/main/homescreen';
import RecipeScreen from '../screens/main/recipescreen';
import SavedRecipeScreen from '../screens/main/savedrecipescreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeTabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
               <Icon name='home' size={25} color={tintColor}></Icon>
           )
        }
    },
    Recipe: { screen: RecipeScreen,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => (
                <Icon name='search' size={25} color={tintColor}></Icon>
            )
        }
     },
    Saved: { screen: SavedRecipeScreen,
        navigationOptions: {
            tabBarLabel: 'Favourite',
            tabBarIcon: ({tintColor}) => (
                <Icon name='heart' size={25} color={tintColor}></Icon>
            )
        }
    }
  },
  {
      initialRouteName: 'Home',
      tabBarOptions: {
          activeTintColor: '#FFF',
          inactiveTintColor: '#6D696A',
          style: {
              backgroundColor: '#74D14C'
          },
          labelStyle: {
              fontSize: 10,
              fontFamily: 'monospace',
              marginVertical: -10
          },
          showIcon: true
      }
  });

  export default HomeTabNavigator;