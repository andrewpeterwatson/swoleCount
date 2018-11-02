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
import colors from '../constants/Colors'
import { WebBrowser } from 'expo';
import { Footer } from 'native-base';
import Images  from '../assets/images';

// import { TimerMain } from '../components/timerMain';
// import { Movements } from '../components/movements'
// import { Splits } from '../components/splits'
// import AddRound from '../components/AddRound'

interface IProps {
  navigation: any
}
interface IState {
    movementList: any;
    currentTime: number;
    pace: number;
    rounds: Array<Object>
}

export default class HomeScreen extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
  }
  public static navigationOptions = {
    header: null,
  };

  // state: IState = {
  //   movementList: [],
  //   currentTime: 0,
  //   rounds: [],
  //   pace: 0,
  // }

  // _addMovement = (movement: string, reps: number) => this.setState({ 
  //     movementList:  
  //     [ 
  //         { movement, reps }, 
  //         ...this.state.movementList 
  //     ],
  // })

  // _handleUpdateRound = () => {
  //   let newTime = this.state.currentTime + 1.23
  //   let rounds = this.state.rounds
  //   const newRound =  {
  //     round: this.state.rounds.length + 1, 
  //     time: newTime,
  //   }
  //   rounds.unshift(newRound)
  //   this._getPace(rounds, newTime)
  //   this.setState({ 
  //     rounds,
  //     currentTime: newTime
  //   })
  //}


//   _getPace = (rounds: Array<Object>, currentTime: number) => {
//     const pace = currentTime / rounds.length
//     this.setState({ pace })
//     console.log('PACECCEEE', pace, currentTime, rounds.length)
// }

  // _handleFinishPress = () => {
  //   console.log('ROUNDS AND REPS', this.state.rounds, this.state.movementList)
  //   this.props.navigation.navigate('Results', {
  //     time: this.state.currentTime,
  //     rounds: this.state.rounds,
  //     movementList: this.state.movementList,
  //   })
  //   // this.setState({ currentTime: newTime })
  // }

  public render() {
   // console.log('rounds', this.state.rounds )
    return (
      <View style={styles.container}>
          <Image 
            source={Images.graph} 
        />
        	<View style={styles.container}>
						<TouchableOpacity 
              style={styles.swoleBtn}
              onPress={()=> this.props.navigation.navigate('Workouts')}
						>
              <Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>
                GET SWOLE 
              </Text>
						</TouchableOpacity>
				</View>
        <Footer style={{ height: 75, backgroundColor: colors.secondary_dark, borderBottomWidth: 0 }}>
          <View style={{ 
            flex: 1, 
            marginTop: 20, 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "flex-start",
            }}>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('My Workouts')}>
              <Text style={{ color: colors.text_light }}>My Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('New')}>
              <Text style={{ color: colors.text_light }}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Recommended')}>
              <Text style={{ color: colors.text_light }}>Recommended</Text>
            </TouchableOpacity>
          </View>
        </Footer>
      </View>
    );
  }  

  // public _handleCurrentTime = (currentTime: any) =>{
  //   this.setState({
  //     currentTime
  //   })
  // };
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
  swoleBtn: {
		width: 150,
		height: 150,
		marginTop: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		backgroundColor: 'orange'
	}
});
