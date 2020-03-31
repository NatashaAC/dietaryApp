import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import OnboardingScreens from './components/screens/onboarding/onboardingscreen';
import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registration/registerscreen';
import HealthCondition from './components/screens/form/registration/condition';
import AllergyScreen from './components/screens/form/registration/allergy';

import HomeScreen from './components/screens/main/homescreen';
import RecipeScreen from './components/screens/main/recipescreen';
import SavedRecipeScreen from './components/screens/main/savedrecipescreen';

const switchNavigator = createSwitchNavigator({
  Onboarding: OnboardingScreens,
  Login: LoginScreen,
  Register: RegisterScreen,
  Health: HealthCondition,
  Allergy: AllergyScreen
}
,{
  initialRouteName: 'Allergy'
}
);

const homeTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Recipe: RecipeScreen,
  Saved: SavedRecipeScreen
});

export default createAppContainer(homeTabNavigator);