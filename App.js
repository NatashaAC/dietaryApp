import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/screens/form/loginscreen';
import RegisterScreen from './components/screens/form/registerscreen';

const stackNavigator = createStackNavigator({
  Login: { screen: LoginScreen},
  Register: { screen: RegisterScreen }
});

const App = createAppContainer(stackNavigator);

export default App;