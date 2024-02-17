import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [peso, setPeso] = useState(95.5)
  const [altura, setAltura] = useState(1.69)
  const [indice, setIndice] = useState()
  const [situacao, setSituacao] = useState()

  function calcularIndice() {
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
        style={styles.input}
        defaultValue={peso}
        onChangeText={(txt) => setPeso(txt)}
      />

      <Text style={styles.label}>Informe altura</Text>
      <TextInput
        style={styles.input}
        defaultValue={altura}
        onChangeText={(txt) => setAltura(txt)}
      />

      <TouchableOpacity
        onPress={calcularIndice}
        style={styles.botao}
      >
        <Text style={{ color: 'white' }}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.containerResultado}>
        <Text style={styles.label}>Indice: {indice}</Text>
        <Text style={styles.label}>Situação: {situacao}</Text>
      </View>
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
