import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import moment from 'moment';
import { Timer } from './timer'

interface IState {
  interval: any,
  running: boolean,
  now: any,
  startTime: any,
}

interface IProps {
  currentTime: any,
  _handleCurrentTime: any,
}

export class TimerMain extends React.Component<IProps, IState>{
  public state: IState = {
    interval: null,
    running: false,
    now: null,
    startTime: null,
  }

  public render(){
    const { interval, running, now, startTime } = this.state;
    const { currentTime } = this.props;
    return(
      <View style={styles.container}>
        <Timer interval={ currentTime + (now - startTime) }/>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          {!running? ( 
              <TouchableOpacity 
                onPress={this._startTimer}
                style={styles.button}
              >
                <Text style={styles.text}>Start</Text>
              </TouchableOpacity>
            ) : (  
              <TouchableOpacity 
                onPress={this._stopTimer}
                style={styles.button}
              >
                <Text style={styles.text}>Stop</Text>
              </TouchableOpacity>
            )
          }
    
          <TouchableOpacity 
            onPress={this._resetTimer}
            style={styles.button}
          >
            <Text style={styles.text}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    )
  }

  public _startTimer = () => {    
    const now = moment();
    
    this.setState({
      startTime: now,
      now,
      running: true,
      interval: 
        setInterval(()=> {
          this.setState({ 
           now: moment()
          })
        }, 100), 
    })
  }

  public _stopTimer = () => {
    clearInterval(this.state.interval);

    console.log("now", this.state.now)
    console.log("start", this.state.startTime)
    this.props._handleCurrentTime( this.props.currentTime + (this.state.now - this.state.startTime))

    this.setState({ 
      running: false,
      interval: null, 
      startTime: 0,
      now: 0,
    });
    
  }
 
  public _resetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ 
      running: false,
      interval: null, 
      startTime: 0,
      now: 0,
    })
    this.props._handleCurrentTime(0)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  timerText: {
    fontSize: 90,
  },
  text: {
    fontSize: 30,
    color: '#FFF'
  },
  button: {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'orange'
  }
});