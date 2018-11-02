import * as React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import MovementItem from './movementItem'
import AddMovement from './addMovement';
import Collapsible from 'react-native-collapsible'
import TextCollapsible from './TextCollapsible'
import SplitPace from './splitPace'
import SplitLap from './splitLap'

interface IProps {
    currentTime: number,
    rounds: Array<Object>,
    pace: number,
}
interface IState {
    currentTime: number,
    prevSplit: number, 
    isCollapsed: boolean, 
}

export class Splits extends React.Component<IProps, IState> {

    state: IState = {
        currentTime: this.props.currentTime,
        prevSplit: 0, 
        isCollapsed: false, 
    }

 


    render() {
        const { pace, currentTime, rounds } = this.props
        console.log('isCollapsed', this.state.isCollapsed)
        return (
            <View style={{ flex: 1}}>
                <TouchableOpacity 
                    style={[styles.drawerContainer, this.state.isCollapsed && styles.bottomLine]} 
                    onPress={() => this.setState({ isCollapsed: (!this.state.isCollapsed ? true : false) })}
                >
                    <TextCollapsible left={10}>Splits</TextCollapsible>
                    <TextCollapsible right={10}>{this.state.isCollapsed ? '+' : '-'}</TextCollapsible>
                </TouchableOpacity>
                <Collapsible style={styles.collapsibleStyle} collapsed={this.state.isCollapsed}>
                    <SplitPace pace={pace} rounds={rounds} currentTime={currentTime} />
                    <SplitLap pace={pace} rounds={rounds} currentTime={currentTime} />
                </Collapsible>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        width: '100%', 
        height: 50, 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: 'grey',
        borderBottomWidth: 0,
    },
    bottomLine: {
        borderStyle: 'solid',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    collapsibleStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey',
        borderStyle: 'solid',
    }
})