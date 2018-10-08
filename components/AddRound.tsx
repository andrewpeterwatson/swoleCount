import * as React from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

interface IProps {}

interface IState {
    currentRound: number
}

class AddRound extends React.Component<IProps, IState> {

    state: IState = {
        currentRound: 0,
    }

    _finishWorkout = () => this.setState({ currentRound: 0 })

    render() { 
        const { currentRound } = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.swoleBtn}
                onPress={() => this.setState({ currentRound: this.state.currentRound + 1})}
                >
                    <Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>
                        {currentRound === 0 ? 'GET SWOLE' : currentRound}
                    </Text>
                </TouchableOpacity>
                <Button title='finish workout' onPress={() => this._finishWorkout()}>
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