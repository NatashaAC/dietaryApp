import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { creeateBottomTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';
import HomeScreen from './components/screens/main/homescreen';

import MealPlanScreen from './components/screens/main/mealplanscreen';
import RecipeScreen from './components/screens/main/recipescreen';
import SavedRecipeScreen from './components/screens/main/savedrecipescreen';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeScreen
},
{
  initialRouteName: 'Login'
}
);

const homeTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Meal: Meal
})

export default createAppContainer(stackNavigator);