import * as React from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

interface IProps {
    onSubmit: () => void,
    _updateMovement: any,
    _updateReps: any,
    movement: string,
    reps: number,
}

class AddMovement extends React.Component <IProps> {
    public static defaultProps: Partial<IProps> = {
        movement: '',
        reps: 0,
      };


    render() {
        const { onSubmit, _updateMovement, _updateReps, reps, movement } = this.props
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder='movement' 
                    style={[styles.input, {marginLeft: 10}]} 
                    value={movement}
                    clearButtonMode={'always'}
                    returnKeyType='done'
                    onChangeText={text => _updateMovement(text)}
                />
                <TextInput 
                    placeholder='reps' 
                    style={styles.input}
                    keyboardType='numeric'
                    value={reps.toString() === '0' ? '' : reps.toString()}
                    clearButtonMode={'always'}
                    returnKeyType='done'
                    onChangeText={text => _updateReps(parseInt(text))}
                 />
                <TouchableOpacity 
                onPress={() => onSubmit()}
                // disabled={}
                >
                    <Text style={{ fontSize: 20, color: 'orange', marginRight: 10 }}>+ add</Text>
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
        width: 75,
        height: 75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 130,
        height: 50,
        borderRadius: 5,
        borderColor: 'darkgrey',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})

export default AddMovement