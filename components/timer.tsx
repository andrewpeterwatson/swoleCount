import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

interface IState {
 
}

interface IProps {
  interval: any
}

export class Timer extends React.Component<IProps, IState>{
  public render (){
    const { interval } = this.props;
    return(
      <Text style={styles.timerText}>{this._formatTime(interval)}</Text>
    )
  }

  public _formatTime = (interval: any) =>{
    const pad = (n: any) => n < 10 ? '0' + n : n;
    const duration = moment.duration(interval)
    const centiseconds = Math.floor(duration.milliseconds() / 10)
    let minutes: any = pad(duration.minutes());
    let seconds: any = pad(duration.seconds());
    let milliseconds: any = pad(centiseconds);
    return  `${minutes}:${seconds}.${milliseconds}`
  }
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 90,
  },
});