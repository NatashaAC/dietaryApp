import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import OnboardingScreens from './components/screens/onboarding/onboardingscreen';
import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';

import HomeScreen from './components/screens/main/homescreen';
import RecipeScreen from './components/screens/main/recipescreen';
import SavedRecipeScreen from './components/screens/main/savedrecipescreen';

const switchNavigator = createSwitchNavigator({
  Onboarding: OnboardingScreens,
  Login: LoginScreen,
  Register: RegisterScreen
}
,{
  initialRouteName: 'Login'
}
);

const homeTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Recipe: RecipeScreen,
  Saved: SavedRecipeScreen
});

export default createAppContainer(homeTabNavigator);