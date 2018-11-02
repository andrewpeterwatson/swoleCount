import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import MyWorkouts from '../screens/workouts/workouts_myWorkouts'
import NewWorkouts from '../screens/workouts/workouts_new'
import RecWorkouts from '../screens/workouts/workouts_rec'


export default AddStack = createMaterialTopTabNavigator({
  ['My Workouts']: {screen: MyWorkouts},
  New: { screen: NewWorkouts },
  Recommended: { screen: RecWorkouts }
  },
  {
    tabBarOptions: {
      activeTintColor: "orange",
      indicatorStyle: { 
        backgroundColor: "orange"
      },
      style: {
        backgroundColor: "#505050",
        height: 150,
        justifyContent: "flex-end"
      },
      swipeEnabled: true,
    }
  },
);