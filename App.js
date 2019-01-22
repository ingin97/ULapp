import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/HomeScreen'
import Program from './screens/ProgramScreen'
import Info from './screens/InfoScreen'
import DrawerNavigator from './navigation/DrawerNavigator'
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
