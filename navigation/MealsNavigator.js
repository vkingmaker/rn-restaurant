/** @format */

import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: {
		screen: CategoryMealScreen,
	},
	MealDetail: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);
