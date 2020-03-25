import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';
import HomeScreen from './components/screens/main/homescreen';

import MealPlanScreen from './components/screens/main/mealplanscreen';
import RecipeScreen from './components/screens/main/recipescreen';
import SavedRecipeScreen from './components/screens/main/savedrecipescreen';

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,

},
{
  initialRouteName: 'Login'
});

const dashboardStackNavigator = createStackNavigator({
  homeTabNavigator: homeTabNavigator
});

const homeTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Meal: MealPlanScreen,
  Recipe: RecipeScreen,
  Saved: SavedRecipeScreen
});

export default createAppContainer(homeTabNavigator);