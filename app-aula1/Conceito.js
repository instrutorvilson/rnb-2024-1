import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import { useState } from 'react'

export default function Conceito() {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text style={styles.title}>Hello {nome}</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o nome'
                defaultValue={nome}
                onChangeText={text => setNome(text)}
            />

            <Button
                title="Clique aqui"
                onPress={() => alert('oi')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
      marginVertical: '15px',
      padding: '5px',
      backgroundColor: '#e2e3d9',
      borderRadius: '10px',
      color: '#031c30'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color: 'red',
      fontSize: '22px',
      borderBottomWidth: '2px',
      marginBottom: '5px',
      borderBottomColor: 'green'
    }
  });