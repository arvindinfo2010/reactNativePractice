// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import ComponentsScreen from './src/ComponentsScreen';

// const navigator = createStackNavigator(
//   {
//     Components: ComponentsScreen
//   },
//   {
//     initialRouteName: 'Components',
//     defaultNavigationOptions: {
//       title: 'App'
//     }
//   }
// );

// export default createAppContainer(navigator);


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ComponentsScreen from './src/ComponentsScreen';
import ChangeTextVal from './src/ChangeTextVal';
import ListScreen from './src/ListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ChangeTextVal/>
      <ComponentsScreen/>
      <ListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
