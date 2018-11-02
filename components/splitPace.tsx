import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

interface IProps {
    rounds: Array<Object>,
    currentTime: number,
    pace: number,
}

interface IState {
    splitTimer: number;
}

export default class SplitPace extends React.Component<IProps, IState> {

    state: IState = {
        currentTime: this.props.currentTime,
        splitTimer: 0,
    }

    render() {
        const { pace } = this.props
        // console.log('currentTime pace', this.props.currentTime, this.props.rounds)
        return (
            <View style={styles.container}>
                <Text style={[{ fontSize: 24, marginLeft: 20, fontWeight: '100' }]}>Pace</Text>
                <Text style={[{ fontSize: 24, marginRight: 20, fontWeight: '100' }]}>{pace}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

