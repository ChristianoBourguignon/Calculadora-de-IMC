import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useKeepAwake } from 'expo-keep-awake';
import Title from './src/components/Principal/title.js';
import Form from './src/components/Form/form.js';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <Title />
      <View>
        <Form />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:	'#F5DEB3',
  },
});
