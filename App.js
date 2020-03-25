import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';
import HomeScreen from './components/screens/main/homescreen';

import RecipeScreen from './components/screens/main/recipescreen';
import SavedRecipeScreen from './components/screens/main/savedrecipescreen';
import OnboardingScreens from './components/onboarding/onboardingscreen';

const switchNavigator = createSwitchNavigator({
  Onboarding: OnboardingScreens,
  Login: LoginScreen,
  Register: RegisterScreen
}
,{
  initialRouteName: 'Onboarding'
}
);

// const dashboardStackNavigator = createStackNavigator({
//   homeTabNavigator: homeTabNavigator
// });

const homeTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Recipe: RecipeScreen,
  Saved: SavedRecipeScreen
});

export default createAppContainer(homeTabNavigator);