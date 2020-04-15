import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import OnboardingScreens from './components/screens/onboarding/onboardingscreen';
import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registration/registerscreen';
import HealthCondition from './components/screens/form/registration/condition';
import AllergyScreen from './components/screens/form/registration/allergy';

import HomeTabNavigator from './components/tabNavigation/bottomTabNav';

const switchNavigator = createSwitchNavigator({
  Onboarding: OnboardingScreens,
  Login: LoginScreen,
  Register: RegisterScreen,
  Health: HealthCondition,
  Allergy: AllergyScreen,
  HomeTabNavigator: { screen: HomeTabNavigator }
}
,{
  initialRouteName: 'Allergy'
}
);

export default createAppContainer(switchNavigator);