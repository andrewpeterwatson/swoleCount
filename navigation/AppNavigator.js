import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SwoleTabNavigator from './SwoleTabNavigator';
import WorkoutTabNavigator from './WorkoutTabNavigator'

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Swole: SwoleTabNavigator,
  Workouts: WorkoutTabNavigator
}, {
  mode: 'modal',
  headerMode: 'none'
});