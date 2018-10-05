import * as React from 'react'
import {
    Text,
    View,
} from 'react-native'

interface IProps {}
interface IState {}

export class Movements extends React.Component<IProps, IState> {

    render() {
        return (
            <View style={{width: '100%', height: 200, backgroundColor: 'red'}}>
                <Text>MOVEMENTS</Text>
            </View>
        )
    }
}

// export default Movements