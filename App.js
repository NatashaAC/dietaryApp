import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';
import HomeScreen from './components/screens/main/homescreen';
import Onboarding from './components/platform/index.android';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeScreen,
  Onboarding: Onboarding
},
{
  initialRouteName: 'Onboarding'
}
);

export default createAppContainer(stackNavigator);