import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Results</Text>
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
