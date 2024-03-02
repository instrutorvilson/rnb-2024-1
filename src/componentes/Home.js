import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card'

export default function Home({ navigation }) {
  const[profiles, setProfiles] = useState([])
  const[erro, setErro] = useState('')

  async function getProfiles(){
    try{
      let response = await fetch('https://api.github.com/users')
      let dados = await response.json()
      setProfiles(dados)
      
    }
    catch(erro){
       setErro(erro.message)
    }
  }

  useEffect(()=>{ getProfiles() },[])

  return (
    <View style={styles.container}>
      <Text>Usuários github</Text>
      <FlatList 
         data={profiles}
         renderItem={({item})=> <Card user={item} navigation={navigation}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
