import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Fruta from './src/Fruta';
import { useEffect, useState } from 'react';


export default function App() {
  const[nome, setNome] = useState('')
  const[tipo, setTipo] = useState('')
  const [frutas, setFrutas] = useState([])


  useEffect(() => { loadFrutas() }, [frutas])

  async function loadFrutas() {
    try {
      const response = await fetch('http://localhost:3000/frutas')
      const dados = await response.json()
      setFrutas(dados)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function salvar(){
    fetch('http://localhost:3000/frutas',
    {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body:JSON.stringify({nome,tipo})
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>Cesta de Frutas</Text>

      <Text>Informe nome da fruta</Text>
      <TextInput
        placeholder='Ex: laranja'
        defaultValue={nome}
        onChangeText={txt => setNome(txt)}
        style={styles.input}
      />

      <Text>Informe tipo da fruta</Text>
      <TextInput
        placeholder='Ex: citrica'
        defaultValue={tipo}
        onChangeText={txt => setTipo(txt)}
        style={styles.input}
      />
      <Pressable 
         style={styles.btacao}
         onPress={salvar}
      >
        <Text style={styles.labelBotao}>Adicionar</Text>
      </Pressable>

      <FlatList
        data={frutas}
        renderItem={({ item }) => <Fruta dados={item}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    labelBotao:{
       color: 'white',
       fontWeight: 'bold',
       alignSelf: 'center'
    },
     btacao:{
       backgroundColor: '#366CE0',
       borderRadius: 5,
       padding: 10,
       marginVertical: 10
    },
     rotulo:{
        fontSize: 20
     },
     input:{
       borderBottomWidth: 1,
       marginVertical: 10,
       padding: 10
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
       margin: 30,
       justifyContent: 'center',
     },
});
