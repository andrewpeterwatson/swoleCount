import { createStackNavigator } from 'react-navigation';
import SwoleNavigator from './SwoleTabNavigator'

export default AddStack = createStackNavigator({
  Workouts: SwoleNavigator
},{
  mode: "modal",
  headerMode: 'none',
});