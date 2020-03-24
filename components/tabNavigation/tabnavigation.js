import { createAppContainer } from 'react-navigation';
import { createTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/main/homescreen';
import MealPlanScreen from '../screens/main/mealplanscreen';
import RecipeScreen from '../screens/main/recipescreen';
import SavedRecipeScreen from '../screens/main/savedrecipescreen';

const tabNavigator = createTabNavigator({
    Home: HomeScreen,
    Meal: MealPlanScreen,
    Recipe: RecipeScreen,
    Saved: SavedRecipeScreen
});

export default createAppContainer(tabNavigator);