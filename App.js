import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[nome, setNome] = useState('')
  const[sobreNome, setSobreNome] = useState('')
  const[nomeCompleto, setNomeCompleto] = useState('')

  function gerarNomeCompleto(){
    setNomeCompleto(nome + ' ' + sobreNome)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>Informe nome</Text>
      <TextInput
         style={styles.input}
         placeholder='Ex: Maria'
         defaultValue={nome}
         onChangeText={txt => { 
           setNome(txt) 
           setNomeCompleto('')
        }
      }
      />

     <Text style={styles.rotulo}>Informe sobrenome</Text>
      <TextInput
         style={styles.input}
         placeholder='Ex: dos Santos'
         defaultValue={sobreNome}
         onChangeText={txt => { 
           setSobreNome(txt) 
           setNomeCompleto('')
         }
       }
      />
      <Pressable 
         style={styles.btacao}
         onPress={gerarNomeCompleto}
      >
          <Text style={styles.labelBotao}>Mostrar nome completo</Text>
      </Pressable>
      
      <Text>{ nomeCompleto }</Text>
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
