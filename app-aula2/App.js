import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [indice, setIndice] = useState()
  const [situacao, setSituacao] = useState()

  const pesoRef = useRef(null)
  const alturaRef = useRef(null)

  function calcularIndice() {
    if(peso == ''){
      //alert('Informe peso')
      Toast.show({
        type: 'error',
        text1: 'Entrada inválida',
        text2: 'Informe o peso',
        visibilityTime: 3000
      });

      pesoRef.current.focus()
      return
    }

    if(altura == ''){
      //alert('Informe altura')
      Toast.show({
        type: 'error',
        text1: 'Entrada inválida',
        text2: 'Informe a altura',
        visibilityTime: 3000
      });
      alturaRef.current.focus()
      return
    }

    let x = peso / (altura * altura)
    setIndice(x)
    
    let status = 'Muito abaixo do peso'
    
    if (x > 17 && x < 18.49)
      status = "Abaixo do peso"
    else if (x > 18.5 && x < 25)
      status = "Peso normal"
    else if (x >= 25.0 && x < 30)
      status = "Acima do peso"
    else if (x >= 30 && x < 35)
      status = "Obesidade I"
    else if (x >= 35 && x < 40)
      status = "Obesidade II"
    else if (x > 40)
    status = "Obesidade III"

    setSituacao(status)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC- Indice de Massa Corporal</Text>

      <Text style={styles.label}>Informe peso</Text>
      <TextInput
        placeholder='Ex: 95.5'
        style={styles.input}
        defaultValue={peso}
        onChangeText={(txt) => setPeso(txt)}
        ref={pesoRef}
      />

      <Text style={styles.label}>Informe altura</Text>
      <TextInput
        style={styles.input}
        defaultValue={altura}
        onChangeText={(txt) => setAltura(txt)}
        ref={alturaRef}
        placeholder='Ex: 1.74'        
      />

      <TouchableOpacity
        onPress={calcularIndice}
        style={styles.botao}
      >
        <Text style={{ color: 'white' }}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.containerResultado}>
        <Text style={styles.label}>Indice:  
          <Text style={{color:'red', marginLeft:'10px'}}>{indice}</Text>
        </Text>
        <Text style={styles.label}>Situação: 
          <Text style={{color:'blue', marginLeft:'10px'}}>{situacao}</Text>
        </Text>
      </View>
     
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerResultado: {
    marginTop: '15px',
    borderWidth: '1px',
    paddingStart: '10px'
  },
  botao: {
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '15px',
    marginTop: '10px',
    alignItems: 'center'
  },
  input: {
    fontSize: '18px',
    padding: '10px',
    textAlign: 'right',
    borderBottomWidth: '1px'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    margin: '10px'
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '30px',
    alignSelf: 'center'
  },
  label: {
    fontSize: '18px',
    fontWeight: '500',
    marginVertical: '10px'
  }
});
