import * as React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Footer } from 'native-base';

import { TimerMain } from '../components/timerMain';

import { Movements } from '../components/movements'
import AddRound from '../components/AddRound'

interface IProps {
  navigation: any
}
interface IState {
  currentTime: any,
  movementList: any,
  round: number
}

export default class SwoleScreen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
  }
  public static navigationOptions = {
    header: null,
  };

  state: IState = {
    movementList: [],
    round: 0,
    currentTime: 0,
  }

  _addMovement = (movement: string, reps: number) => this.setState({ 
      movementList:  
      [ 
          { movement, reps }, 
          ...this.state.movementList 
      ],
  })

  _handleUpdateRound = () => this.setState({ round: this.state.round + 1 })

  _handleFinishPress = () => {
    console.log('ROUNDS AND REPS', this.state.round, this.state.movementList)
    this.props.navigation.navigate('Results', {
      round: this.state.round,
      movementList: this.state.movementList,
    })
  }

  public render() {
    console.log('navigation', this.props)
    return (
      <View style={styles.container}>
        <TimerMain 
          currentTime={this.state.currentTime}
          _handleCurrentTime={this._handleCurrentTime}
        />
        <Movements 
          movementList={this.state.movementList}
          _addMovement={this._addMovement}
        />
        <AddRound
          round={this.state.round}
          _handleUpdateRound={this._handleUpdateRound}
          _handleFinishPress={this._handleFinishPress}
        />
        <Footer>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate("MyWorkouts")}>
              <Text>My Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>New</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Recommended</Text>
            </TouchableOpacity>
          </View>
        </Footer>
      </View>
    );
  }  

  public _handleCurrentTime = (currentTime: any) =>{
    this.setState({
      currentTime
    })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#383838',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
