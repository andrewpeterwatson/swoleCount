import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';

interface IState {
  currentTime: number,
  interval: any
}

export class Timer extends React.Component<null, IState>{
  public state: IState = {
    currentTime: 0,
    interval: null
  }

  public render(){
    console.log(this.state.currentTime)
    return(
      <View style={{flex: .5, flexDirection: 'row'}}>
        <Text>{this._formatTime()}</Text>
        <TouchableOpacity onPress={this._startTimer}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._stopTimer}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._resetTimer}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }

  public _formatTime = () =>{
    let formattedTime = `${this.state.currentTime/1000}`
    return formattedTime
  }

  public _startTimer = () => {
    this.setState ({
      interval: setInterval(() => this.setState({currentTime: this.state.currentTime +1}), 1000)
    })
  }

  public _stopTimer = () => {
    clearInterval(this.state.interval)
  }
 
  public _resetTimer = () => {
    clearInterval(this.state.interval)
    this.setState({ currentTime: 0 })
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
  },
});