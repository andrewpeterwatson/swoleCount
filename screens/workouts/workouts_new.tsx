import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import colors from '../../constants/Colors'

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
            <Container>
                <Content style={{ backgroundColor: colors.secondary_dark }}>
                    <Text>ITS SWOLE NEW</Text>
                </Content>
            </Container>
        )
    }
}

export default NewWorkouts