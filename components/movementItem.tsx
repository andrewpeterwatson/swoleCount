import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

interface IProps {
    name: string,
    reps: number,
}

interface IState {
    reps: number
}

class MovementItem extends React.Component<IProps, IState> { 

    state: IState = {
        reps: this.props.reps
    }

    render() {
        const { name, reps } = this.props
        return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>{name}</Text>
            <Text style={{ fontSize: 20 }}>{reps} reps</Text>
            <TouchableOpacity 
                style={styles.addBtn}
                >
                <Text style={styles.btnText} >+</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        width: '100%', 
        height: 75, 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey',
        borderStyle: 'solid',
    },
    addBtn: {
        marginRight: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    btnText: {
        fontSize: 30,
        color: 'white'
    }
})

export default MovementItem