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

interface IProps {
    currentTime: number,
}
interface IState {
    currentTime: number,
    prevSplit: number, 
}

export class Splits extends React.Component<IProps, IState> {

    state: IState = {
        currentTime: this.props.currentTime,
        prevSplit: 0, 
        isCollapsed: false, 
    }

    _handleAddMovement = (movement: string, reps: number) => {
        this.setState({ movement: '', reps: 0, })
        this.props._addMovement(movement, reps)
    }

    _updateMovement = (movement: string) => this.setState({ movement })

    _updateReps = (reps: number) => this.setState({ reps })

    render() {
        const { movement, reps } = this.state
        const { movementList, _addMovement } = this.props
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
                <Collapsible collapsed={this.state.isCollapsed}>
                    {/* <AddMovement 
                        movement={movement}
                        reps={reps}
                        onSubmit={() => this._handleAddMovement(this.state.movement, this.state.reps)} 
                        _updateReps={this._updateReps}
                        _updateMovement={this._updateMovement}
                    /> */}
                    {/* <ScrollView>
                        { movementList.map( (movement: any) => 
                            <MovementItem 
                                key={movement.movement} 
                                reps={movement.reps} 
                                name={movement.movement}
                            />
                        )}
                    </ScrollView> */}
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
    }
})