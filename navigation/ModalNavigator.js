import { createSwitchNavigator } from 'react-navigation';
import SwoleNavigator from './SwoleTabNavigator'

export default AddStack = createSwitchNavigator({
  Workouts: SwoleNavigator
},{
  mode: "modal"
});