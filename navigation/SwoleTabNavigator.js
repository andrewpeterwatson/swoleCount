import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import MyWorkouts from '../screens/MyWorkoutsScreen'
import NewWorkouts from '../screens/NewWorkoutsScreen'
import RecWorkouts from '../screens/RecWorkoutsScreen'


export default AddStack = createMaterialTopTabNavigator({
  MyWorkouts: { screen: MyWorkouts },
  NewWorkouts: { screen: NewWorkouts },
  RecWorkouts: { screen: RecWorkouts }
  },
  {
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
  },
);