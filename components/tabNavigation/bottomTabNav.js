import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/main/homescreen';
import RecipeScreen from '../screens/main/recipescreen';
import SavedRecipeScreen from '../screens/main/savedrecipescreen';

const HomeTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Recipe: RecipeScreen,
    Saved: SavedRecipeScreen
  },
  {
      initialRouteName: 'Home',
  });

  export default HomeTabNavigator;