import * as React from 'react';
import { Text } from 'react-native';

interface IProps {
  navigation: any,
}
interface IState {}

export default class ExercisesScreen extends React.Component<IProps, IState> {
  render() {
    const { navigation } = this.props
    return (
      <Text>Exercise Screen</Text>
    );
  }
}

