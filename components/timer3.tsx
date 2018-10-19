import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import moment from 'moment';

interface IState {
  mainTimer: any,
  mainTimerStart: any,
  interval: any,
  running: boolean,
}

export class Timer extends React.Component<null, IState>{
  public state: IState = {
    mainTimer: 0,
    //moment().minute(0).second(0).millisecond(0).format('mm:ss.SS'),
    mainTimerStart: 0,
    interval: null,
    running: false,
    //.minute(0).second(0).millisecond(0).format('mm:ss.SS')
  }

  public render(){
    const { running } = this.state;
    return(
      <View style={styles.container}>
    
        <Text style={styles.timerText}>{moment(this.state.mainTimer).format('mm:ss.SS')}</Text>
        
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

  public async _startTimer  () {
    const { interval, mainTimer, mainTimerStart } = this.state;

    if(!interval){
      await this.setState({
        running: true,
        mainTimerStart: moment(),
        
      })

      console.log("mainTimer1", mainTimer)

      setInterval(()=> {
        this.setState({ 
          mainTimer: moment().diff(mainTimerStart)
        })
      }, 1000)
    }

    console.log("mainTimer2", mainTimer)
    console.log("mainTimerStart", mainTimerStart)
  }

  public _stopTimer = () => {
    console.log('mainTimerSTOP1',this.state.mainTimer)
    this.setState({ 
      running: false,
      mainTimer: this.state.mainTimer,
      interval: null 
    })
    clearInterval(this.state.interval)
    console.log('mainTimerSTOP2',this.state.mainTimer)
  }
 
  public _resetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ 
      mainTimer: '00:00.00',
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