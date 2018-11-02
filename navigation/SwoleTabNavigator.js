import { createStackNavigator } from 'react-navigation';
import MyWorkouts from '../screens/MyWorkoutsScreen'

export default AddStack = createStackNavigator({
  MyWorkouts: { screen: MyWorkouts }
},{
  mode: "modal"
});