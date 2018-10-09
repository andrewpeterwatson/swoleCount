import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

interface IProps {
  navigation: any,
}
interface IState {}

export default class ResultsScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text>Results</Text>
        <Text>Rounds {navigation.getParam('round')}</Text>
        <Text>.....</Text>
        {console.log('MOVEMENTLIST', navigation.getParam('movementList'))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
