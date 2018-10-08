import * as React from 'react'
import {
    Text,
    View,
    ScrollView,
} from 'react-native'
import MovementItem from './movementItem'
import AddMovement from './addMovement';

interface IProps {}
interface IState {
    movement: string,
    reps: number,
    movementList: any;
}

export class Movements extends React.Component<IProps, IState> {

    state: IState = {
        movement: '',
        reps: 0,
        movementList: []
    }

    _addMovement = () => this.setState({ 
        movementList:  
        [ 
            {movement: this.state.movement, reps: this.state.reps}, 
            ...this.state.movementList 
        ],
        movement: '',
        reps: 0,
    })

    _updateMovement = (movement: string) => this.setState({ movement })

    _updateReps = (reps: number) => this.setState({ reps })

    render() {
        const { movementList } = this.state
        return (
            <View style={{flex: 1}}>
                <AddMovement 
                    movement={this.state.movement}
                    reps={this.state.reps}
                    onSubmit={this._addMovement} 
                    _updateReps={this._updateReps}
                    _updateMovement={this._updateMovement}
                />
                <ScrollView>
                    { movementList.map( (movement: any) => 
                        <MovementItem key={movement.movement} reps={movement.reps} name={movement.movement}/>
                    )}
                </ScrollView>
            </View>
        )
    }
}