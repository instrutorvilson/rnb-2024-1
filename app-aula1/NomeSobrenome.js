import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import { useState } from 'react'

export default function NomeSobrenome() {
    const [nome, setNome] = useState('Joana')
    const [sobreNome, setSobreNome] = useState('Bezzera')
    const [nomeCompleto, setNomeCompleto] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados completos</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o nome'
                defaultValue={nome}
                onChangeText={text => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Digite o sobrenome'
                defaultValue={sobreNome}
                onChangeText={text => setSobreNome(text)}
            />

            <Button
                title="Clique aqui"
                onPress={() => setNomeCompleto(nome + " " + sobreNome)}
            />
            <Text style={styles.resultado}>{nomeCompleto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado:{
       textAlign: "center",
       marginVertical: '15px',
       fontWeight: 'bold',
       fontSize: '18px'
    },
    container:{
      marginTop: '40px',
      backgroundColor: 'silver', 
      padding: '10px'
    },
    input:{
      marginVertical: '10px',
      padding: '5px',
      backgroundColor: '#e2e3d9',
      borderRadius: '10px',
      color: '#031c30'
    },    
    title:{
      color: 'red',
      fontSize: '22px',
      borderBottomWidth: '2px',
      marginBottom: '5px',
      borderBottomColor: 'green'
    }
  });