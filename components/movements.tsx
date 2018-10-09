import * as React from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import MovementItem from './movementItem'
import AddMovement from './addMovement';
import Collapsible from 'react-native-collapsible'

interface IProps {
    movementList: Array<object>, 
    _addMovement: any,
}
interface IState {
    movement: string,
    reps: number,
}

export class Movements extends React.Component<IProps, IState> {

    state: IState = {
        movement: '',
        reps: 0,
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
                <TouchableOpacity style={{ width: '100%', height: 30, backgroundColor: 'red'}} onPress={() => this.setState({ isCollapsed: (!this.state.isCollapsed ? true : false) })}>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.isCollapsed}>
                    <AddMovement 
                        movement={movement}
                        reps={reps}
                        onSubmit={() => this._handleAddMovement(this.state.movement, this.state.reps)} 
                        _updateReps={this._updateReps}
                        _updateMovement={this._updateMovement}
                    />
                    <ScrollView>
                        { movementList.map( (movement: any) => 
                            <MovementItem 
                                key={movement.movement} 
                                reps={movement.reps} 
                                name={movement.movement}
                            />
                        )}
                    </ScrollView>
                </Collapsible>
            </View>
        )
    }
}