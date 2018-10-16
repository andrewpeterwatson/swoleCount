import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

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
        <Text>Rounds {navigation.getParam('round')}</Text>
        <Text>Results</Text>
        {navigation.getParam('movementList').map(movement => 
          <View>
            <Text>{movement.movement}X{movement.reps}</Text>
            <Text>{movement.reps * navigation.getParam('round')}</Text>
          </View>
        )}
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
