import { useState, useEffect } from 'react';
import {Vibration} from 'react-native';

export default function calcIMC() {
const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageIMC, setMessageImc] = useState('Preencha sua altura e o peso, para podermos calcular o imc');
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState('Calcular');
const [result, setResult] = useState(null);
const [errorMessage, setErrorMessage] = useState('Preencha os dados abaixo para calcular seu IMC');
const [imcList, setimcList] = useState([]);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [showStyles, setShowStyles] = useState(false);

function imcCalculator() {
  let heightFormat = height.replace(",",".");
  let weightFormat = weight.replace(",",".");
  let totalIMC = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
  setimcList ((arr) => [...arr,{id: new Date().getTime(),imc: totalIMC}]);
  setImc(totalIMC);
}
function verificationInputs(){
  if (weight == null && height == null ) {
    Vibration.vibrate();
  }
}

function validationImc() {
  if (weight != null && height != null) {
    imcCalculator();
    setHeight(null);
    setWeight(null);
    setMessageImc('Seu imc é igual: ');
    setTextButton('Calcular Novamente');
  } else {
  verificationInputs();
  setShowErrorMessage(true);
  setShowStyles(true);
  setImc(null);
  Vibration.vibrate()
  setTextButton('Calcular');
  setMessageImc('Preencha corretamente sua altura e seu peso');
}
}
function onBack(){
  setImc(null);
  setHeight(null);
  setWeight(null);
  setShowErrorMessage(false);
}
useEffect(() => {
if (imc != null) {
  if (imc < 18.5) {
    setResult('Indicativo de que está magro.');
  } else if (imc >= 18.5 && imc <= 24.9) {
    setResult('Indicativo de que está normal.');
  } else if (imc >= 25 && imc <= 29.9) {
    setResult('Indicativo de que está com sobrepeso Grau 1.');
  } else if (imc >= 30 && imc <= 39.9) {
    setResult('Indicativo de que está com sobrepeso Grau 2.');
  } else if (imc >= 40) {
    setResult('Indicativo de que está com sobrepeso Grau 3.');
  }
}
}, [imc]);
return {
  height,
  setHeight,
  weight,
  setWeight,
  messageIMC,
  setMessageImc,
  imc,
  textButton,
  setTextButton,
  result,
  errorMessage,
  imcList,
  showErrorMessage,
  showStyles,
  validationImc,
  onBack
};
}