import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import MainScreen from '../screens/HomeScreen';
import TabBarIcon from '../components/TabBarIcon';
import JournalScreen from '../screens/JournalScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ResultsScreen from '../screens/ResultsScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';

const App = createMaterialTopTabNavigator({
  ["Get Swole"]: {screen: MainScreen},
  Journal: {screen: JournalScreen},
  Exercises: {screen: ExercisesScreen},
  
}, {
  tabBarOptions: {
    activeTintColor: "orange",
    indicatorStyle: { 
      backgroundColor: "orange"
    },
    style: {
      backgroundColor: "#505050",
      height: 100,
      justifyContent: "flex-end"
    }
  }
});

export default createStackNavigator({
  App: App,
}, {
  headerMode: "none",
  mode: "modal"
});
