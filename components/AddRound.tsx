import * as React from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

interface IProps {
    round: number,
    _handleFinishPress: any,
    _handleUpdateRound: any
}

interface IState {
    round: number,
}

class AddRound extends React.Component<IProps, IState> {

    render() { 
        // const { currentRound } = this.state
        const { round, _handleFinishPress, _handleUpdateRound } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.swoleBtn}
                onPress={() => _handleUpdateRound()}
                >
                    <Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>
                        {round === 0 ? 'GET SWOLE' : round}
                    </Text>
                </TouchableOpacity>
                <Button title='finish workout' onPress={() => _handleFinishPress()}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    swoleBtn: {
        width: 150,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'orange'
    }
})

export default AddRound