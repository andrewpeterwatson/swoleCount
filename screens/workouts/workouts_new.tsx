import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import colors from '../../constants/Colors'
import WorkoutType from './new/new_workoutType'
import MovementItem from './new/movement_item'

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
                <Content style={{ backgroundColor: colors.secondary_dark,  }}>
                    <View style={styles.bodyContainer}>
                        <WorkoutType />
                        <View style={{ width: '100%', height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Text style={{ color: colors.main_spice, fontSize: 18, marginRight: 20 }}>+ Add Movement</Text>
                        </View>
                        <MovementItem />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: { 
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start' 
    }
})

export default NewWorkouts