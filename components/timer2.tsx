import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import moment from 'moment';

interface IState {
  elapsedTime: any,
  interval: any,
  running: boolean,
  now: any,
  startTime: any,
}

export class Timer extends React.Component<null, IState>{
  public state: IState = {
    elapsedTime: 0,
    interval: null,
    running: false,
    now: null,
    startTime: null,
  }

  public render(){
    const { running } = this.state;
    return(
      <View style={styles.container}>
        {/* <Text style={styles.timerText}>Current: {this.state.currentTime.format('HH:mm:ss.SS')}</Text> */}
        {/* <Text style={styles.timerText}>Start: {this.state.startTime.format('HH:mm:ss.SS')}</Text> */}
        <Text style={styles.timerText}>{moment(this.state.elapsedTime).format('mm:ss.SS')}</Text>
        {/* <Text style={styles.timerText}>{this._formatTime()}</Text> */}
        
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

  // public _formatTime = () =>{
  //   // let minutes: number = 0;
  //   // let seconds: number = 0;
  //   // let milliseconds: number = this.state.currentTime;
  //   // let formattedTime = `${minutes}:${seconds}.${milliseconds}`
  //   // let formattedTime: any = this.state.currentTime;
  //   // return moment().format('HH : mm : ss')
  //   //let currentTime = moment().second()
  // }

  public _startTimer = () => {    
    console.log("now1",this.state.now)
    if(!this.state.interval){
      let { interval, now } = this.state;
      this.setState({
        running: true,
        startTime: moment(),
        interval: 
          setInterval(()=> {
            this.setState({ 
              //counter: counter++, //increase by 1 millisecond
              elapsedTime: moment.duration(moment().diff(this.state.startTime))
            })
          }, 1), 
      })
      console.log("now2",this.state.now)
    }
  }

  public _stopTimer = () => {
    this.setState({ 
      running: false,
      interval: null 
    })
    clearInterval(this.state.interval)
  }
 
  public _resetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ 
      elapsedTime: 0,
      interval: null,
      running: false,
    })
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