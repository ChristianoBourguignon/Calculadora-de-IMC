import { StyleSheet} from 'react-native';
export default function estilo() {
    
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
formBox: {
    padding: 20,
    alignItems: 'center',
    borderTopRadius: 30,
    maxHeight: 500, 
    backgroundColor: '#F0F8FF',
    borderRadius: 30,
  },  
  formLabel: {
    width: '20%',
  },
  formInput: {
    width: '80%',
    borderRadius: 7,
    padding: 10,
    height: 50,
    backgroundColor: '#F5DEB3',
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formButton: {
    padding: 20,
    backgroundColor: '#53b5ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  txtButton: {
    color: '#fff',
    fontWeight: '900',
  },
  errorMessage: {
    color: '#ff0000',
    padding: 10,
    fontWeight: 900,
  },
  formResult: {
    backgroundColor: '#53b5ff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '50%',
    borderRadius: 30,
    marginLeft: '25%',
  }, 
  resultIMC: {
    color: '#fc0330',
    fontWeight: 900,
    fontSize: 30,
  },
  listaIMC: {
    marginTop: 40,
    padding: 5,
    height: '45%',
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  itemlist: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 10,
    textAlign: 'center'
  },
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
});
 return styles;
}