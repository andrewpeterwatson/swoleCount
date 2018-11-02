import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import MyWorkouts from '../screens/MyWorkoutsScreen'
import NewWorkouts from '../screens/NewWorkoutsScreen'
import RecWorkouts from '../screens/RecWorkoutsScreen'


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