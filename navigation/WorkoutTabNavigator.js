import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutsScreen';

export default AddStack = createStackNavigator({
  Main: {screen: MainScreen},
  Workouts: {screen: WorkoutScreen}
},{
  mode: "modal",
});