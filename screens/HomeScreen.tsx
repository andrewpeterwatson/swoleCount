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

import { TimerMain } from '../components/timerMain';

import { Movements } from '../components/movements'
import { Splits } from '../components/splits'
import AddRound from '../components/AddRound'

interface IProps {
  navigation: any
}
interface IState {
<<<<<<< HEAD
    movementList: any;
    currentTime: number;
    pace: number;
    rounds: Array<Object>
=======
  currentTime: any,
  movementList: any,
  round: number
>>>>>>> 88ae282abba3c5685e1fa8b62b342ec02b19ceb0
}

export default class HomeScreen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
  }
  public static navigationOptions = {
    header: null,
  };

  state: IState = {
    movementList: [],
<<<<<<< HEAD
    currentTime: 0,
    rounds: [],
    pace: 0,
=======
    round: 0,
    currentTime: 0,
>>>>>>> 88ae282abba3c5685e1fa8b62b342ec02b19ceb0
  }

  _addMovement = (movement: string, reps: number) => this.setState({ 
      movementList:  
      [ 
          { movement, reps }, 
          ...this.state.movementList 
      ],
  })

  _handleUpdateRound = () => {
    let newTime = this.state.currentTime + 1.23
    let rounds = this.state.rounds
    const newRound =  {
      round: this.state.rounds.length + 1, 
      time: newTime,
    }
    rounds.unshift(newRound)
    this._getPace(rounds, newTime)
    this.setState({ 
      rounds,
      currentTime: newTime
    })
  }


  _getPace = (rounds: Array<Object>, currentTime: number) => {
    const pace = currentTime / rounds.length
    this.setState({ pace })
    console.log('PACECCEEE', pace, currentTime, rounds.length)
}

  _handleFinishPress = () => {
    console.log('ROUNDS AND REPS', this.state.rounds, this.state.movementList)
    this.props.navigation.navigate('Results', {
      time: this.state.currentTime,
      rounds: this.state.rounds,
      movementList: this.state.movementList,
    })
    // this.setState({ currentTime: newTime })
  }

  public render() {
    console.log('rounds', this.state.rounds )
    return (
      <View style={styles.container}>
         <TimerMain 
          currentTime={this.state.currentTime}
          _handleCurrentTime={this._handleCurrentTime}
        />
        <View style={styles.scrollStyle}>
          <ScrollView>
            <Movements 
              movementList={this.state.movementList}
              _addMovement={this._addMovement}
            />
            <Splits 
              pace={this.state.pace}
              currentTime={this.state.currentTime}
              rounds={this.state.rounds}
            />
          </ScrollView>
        </View>
       
        <AddRound
          rounds={this.state.rounds}
          _handleUpdateRound={this._handleUpdateRound}
          _handleFinishPress={this._handleFinishPress}
        />
      </View>
    );
  }

  public _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  public _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  public _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

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
  scrollStyle: {
    flex: 1, 
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
