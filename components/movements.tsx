import * as React from 'react'
import {
    Text,
    View,
    ScrollView,
} from 'react-native'
import MovementItem from './movementItem'
import AddMovement from './addMovement';

interface IProps {
    movement: string,
    reps: number,
    movementList: Array<object>, 
    _addMovement: any,
    _updateMovement: any,
    _updateReps: any,
}
interface IState {}

export class Movements extends React.Component<IProps, IState> {

    render() {
        const { movement, reps, movementList, _addMovement, _updateMovement, _updateReps } = this.props
        return (
            <View style={{flex: 1}}>
                <AddMovement 
                    movement={movement}
                    reps={reps}
                    onSubmit={_addMovement} 
                    _updateReps={_updateReps}
                    _updateMovement={_updateMovement}
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
            </View>
        )
    }
}