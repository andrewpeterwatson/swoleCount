import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SwoleScreen from '../screens/SwoleScreen';
import JournalScreen from '../screens/JournalScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ResultsScreen from '../screens/ResultsScreen'


const App = createMaterialTopTabNavigator({
  ["Get Swole"]:{screen: SwoleScreen},
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

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// const ResultsStack = createStackNavigator({
//   Results: ResultsScreen,
// });

// ResultsStack.navigationOptions = {
//   tabBarLabel: 'Results',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
//     />
//   ),
// };

export default createStackNavigator({
  App: App,
}, {
  headerMode: "none",
  mode: "modal"
});
