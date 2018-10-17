import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import moment from 'moment';

interface IState {
  //currentTime: any,
  elapsedTime: string,
  interval: any,
  running: boolean,
  //startTime: any,
  //elapsedTime: Date
}

export class Timer extends React.Component<null, IState>{
  public state: IState = {
    //currentTime: moment(),
    //.format('HH:mm:ss:SS'),
    elapsedTime: '00:00:00',
    interval: null,
    running: false
    //startTime: moment()
    //.minute(0).second(0).millisecond(0).format('mm:ss.SS')
  }

  public render(){
    const { running } = this.state;
    return(
      <View style={styles.container}>
        {/* <Text style={styles.timerText}>Current: {this.state.currentTime.format('HH:mm:ss.SS')}</Text> */}
        {/* <Text style={styles.timerText}>Start: {this.state.startTime.format('HH:mm:ss.SS')}</Text> */}
        <Text style={styles.timerText}>{this.state.elapsedTime}</Text>
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
    // this.setState ({
    //   interval: setInterval(() => this.setState({currentTime: this.state.currentTime + 1}), 1000)
    // })
    // this.setState({
    //   interval: this.state.currentTime - this.state.startTime,
    // })
    // this.setState({
    //   startTime: moment()
    // })
    const { interval } = this.state;
    let counter = 0;
    if(!interval){
      this.setState({
        running: true,
        interval: 
          setInterval(()=> {
            this.setState({ elapsedTime: moment().hour(0).minute(0).second(counter++).format('HH:mm:ss') })
          }, 1000)
      })
    }
  }

  public _stopTimer = () => {
    console.log('elapsed1',this.state.elapsedTime)
    this.setState({ 
      running: false,
      elapsedTime: this.state.elapsedTime,
      interval: null 
    })
    clearInterval(this.state.interval)
    console.log('elapsed2',this.state.elapsedTime)
  }
 
  public _resetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ 
      elapsedTime: '00:00:00',
      interval: null
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