import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import colors from '../../../constants/Colors'

class WorkoutType extends React.Component {

render() {
    return (
    <View style={[styles.buttonContainer, styles.shadow]}>
        <View style={[styles.rightButton]}>
            <Text style={[styles.text, {color: colors.text_dark}]}>Rounds</Text>
        </View>
        <View style={[styles.leftButton]}>
            <Text style={[styles.text, {color: colors.text_light}]}>Weights</Text>
        </View>
    </View>
        )   
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 40,
        height: 60,
        width: '60%',
        minWidth: 100,
        display: 'flex',
        flexDirection: 'row'
    },
    rightButton: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        backgroundColor: colors.main_spice,
        shadowColor: '#000000',
    },
    leftButton: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: colors.item_dark,
    },
    text: {
        fontSize: 18
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 3,
          shadowOpacity: .3
    }
})

export default WorkoutType