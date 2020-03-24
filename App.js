import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';
import HomeScreen from './components/screens/main/homescreen';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeScreen
},
{
  initialRouteName: 'Home'
}
);

export default createAppContainer(stackNavigator);