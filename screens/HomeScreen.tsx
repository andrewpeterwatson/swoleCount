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

import { Timer } from '../components/timer';

import { Movements } from '../components/movements'
import AddRound from '../components/AddRound'

interface IProps {}
interface IProps {}
interface IState {
    movement: string,
    reps: number,
    movementList: any;
}

export default class HomeScreen extends React.Component<IProps, IState> {
  public static navigationOptions = {
    header: null,
  };

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

  public render() {
    return (
      <View style={styles.container}>
        {/* <Timer /> */}
        <Movements 
          movement={this.state.movement}
          reps={this.state.reps}
          movementList={this.state.movementList}
          _addMovement={this._addMovement}
          _updateMovement={this._updateMovement}
          _updateReps={this._updateReps}
        />
        <AddRound />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
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
