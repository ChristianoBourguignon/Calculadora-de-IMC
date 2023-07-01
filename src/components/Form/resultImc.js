import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Share } from 'react-native';
export default function ResultIMC(props) {

  const onShare = async () => {
      const result = await Share.share({
        message:
          'Meu IMC é: ' + props.ResultIMC + ' e isso é um ' + props.Result,
      });
    }


  return (
    <View style={styles.formResult} >
      <View>
        <Text>{props.messageResultIMC}<Text style={styles.resultIMC}>{props.ResultIMC}</Text> {props.Result}</Text>
          <TouchableOpacity onPress={onShare} >
            <View style={styles.ButtonShare}>
              <Text style={styles.ButtonText}>Compartilhe com seus amigos!</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formResult: {
    backgroundColor: '#F5DEB3',
    padding: 20,
    marginTop: 20,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    textAlign: 'center'
  },
  resultIMC: {
    color: '#fc0330',
    fontWeight: 900,
    fontSize: 20,
  },
  ButtonShare: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#53b5ff',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'center',
    borderRadius: 20,
  },
  ButtonText: {
    color: '#fff'
  }
})
