import * as React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet, 
} from 'react-native'
import colors from '../../../constants/Colors'
import MOVEMENTS from '../../../assets/images/icons.png'

class MovementItem extends React.Component {

    render() {
        return (
            <View style={[styles.itemContainer, styles.shadow]}>
                <View style={styles.descContainer}>
                    <View style={styles.movementIconContainer}>
                        <Image style={{ top: 10, margin: 20 }} source={MOVEMENTS} />
                    </View>
                    <View style={styles.movementNameContainer}>
                        <Text style={{ margin: 20, fontSize: 18, color: colors.text_light }}>DB Stepovers</Text>
                    </View>
                </View>
                <View style={styles.repsContainer}>
                    <Text style={{ fontSize: 32, color: colors.text_dark }}>6</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '80%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 7,
        backgroundColor: colors.item_dark
    },
    descContainer: {
        flex: 2.5,
        display: 'flex',
        flexDirection: 'column',
    },
    repsContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: colors.main_spice
    },
    movementIconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    movementNameContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
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

export default MovementItem