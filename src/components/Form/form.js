import React, { useState, useEffect } from 'react';
import ResultIMC from './resultImc.js'
import calcIMC from './calcIMC.js';
import estilo from '../estilos.js'
import {Text, View, TextInput, TouchableOpacity, Pressable, Keyboard, FlatList} from 'react-native';

export default function Form() {
  const {
    height,
    setHeight,
    weight,
    setWeight,
    messageIMC,
    imc,
    textButton,
    result,
    imcList,
    showErrorMessage,
    validationImc,
    onBack,
  } = calcIMC();
  const styles = estilo();

  return (
      <View>
        <Pressable style={styles.formBox} onPress={Keyboard.dismiss}>
          {imc === null ? (
            <View>
              {showErrorMessage && (
                <View style={styles.formContainer}>
                  <Text style={styles.errorMessage}>Preencha todos os dados corretamente!</Text>
                </View>
              )}
              <View style={styles.formContainer}>
                <Text style={styles.formLabel}>Altura: </Text>
                <TextInput style={styles.formInput} placeholder='Digite sua altura! Ex: 1,65' keyboardType='numeric' onChangeText={setHeight} value={height} />
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.formLabel}>Peso: </Text>
                <TextInput style={styles.formInput} placeholder='Digite seu Peso! Ex: 65,5kg' keyboardType='numeric' onChangeText={setWeight} value={weight} />
              </View>
              <View>
                <TouchableOpacity style={styles.formButton} onPress={validationImc} >
                  <Text style={styles.txtButton}>{textButton}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} Result={result}/>
              <View>
                <TouchableOpacity style={styles.formResult} onPress={onBack} >
                  <Text style={styles.txtButton}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Pressable>
        <FlatList
          style={styles.listaIMC}
          data={imcList.slice().reverse()}
          renderItem={({item}) => {
            return(
              <Text style={styles.itemlist}>
                <Text>Resultados IMC = <Text style={styles.resultIMC}>{item.imc}</Text></Text>
              </Text>
            )
          }}
          keyExtractor={(item) => {
            item.id;
          }}
        />
      </View>
    );
}
    

// const styles = StyleSheet.create({
//   formBox: {
//     padding: 20,
//     alignItems: 'center',
//     borderTopRadius: 30,
//     maxHeight: 500, 
//     backgroundColor: '#F0F8FF',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },  
//   formLabel: {
//     width: '20%',
//   },
//   formInput: {
//     width: '80%',
//     borderRadius: 7,
//     padding: 10,
//     height: 50,
//     backgroundColor: '#F5DEB3',
//   },
//   formContainer: {
//     flexDirection: 'row',
//     marginBottom: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   formButton: {
//     padding: 20,
//     backgroundColor: '#53b5ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20
//   },
//   txtButton: {
//     color: '#fff',
//     fontWeight: '900',
//   },
//   errorMessage: {
//     color: '#ff0000',
//     padding: 10,
//     fontWeight: 900,
//   },
//   formResult: {
//     backgroundColor: '#53b5ff',
//     marginTop: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     width: '50%',
//     borderRadius: 30,
//     marginLeft: '25%',
//   }, 
//   resultIMC: {
//     color: '#fc0330',
//     fontWeight: 900,
//     fontSize: 30,
//   },
//   listaIMC: {
//     marginTop: 40,
//     padding: 5,
//     height: '45%',
//     borderRadius: 20,
//     backgroundColor: '#fff'
//   },
//   itemlist: {
//     fontSize: 20,
//     fontWeight: 900,
//     marginBottom: 10,
//     textAlign: 'center'
//   },
// });