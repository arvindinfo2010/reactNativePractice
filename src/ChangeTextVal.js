import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [Text1, setText1] = useState("Welcome Home");
  const tDate=new Date();

  return (
    <View style={styles.container}>
      <Text style={{ color: '#888', fontSize: 25 }}>Let know about product country name</Text>
      <TextInput >{Text1}</TextInput>
      <Button title="Change Text" onPress={() => setText1("Hello Text Changes"+tDate)} />
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