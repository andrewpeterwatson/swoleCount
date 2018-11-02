import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    Container,
} from 'native-base';

class NewWorkouts extends React.Component {
    static navigationOptions = () => {
        return {
          headerStyle: {
            backgroundColor: '#FFF',
            borderBottomColor: '#FFF',
          },
          headerLeft: (
            <Text>GET OUT</Text>
          ),
          headerRight: ( 
            <Text>STAY HERE</Text>
          )
        }
      };

    render() {
        return (
            <View>
                <Text>ITS SWOLE NEW</Text>
            </View>
        )
    }
}

export default NewWorkouts