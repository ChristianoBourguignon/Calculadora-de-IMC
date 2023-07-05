import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.tituloH1}>Calculadora de IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloH1: {
    fontSize: 24,
  },
  boxTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 30,
  },

});
