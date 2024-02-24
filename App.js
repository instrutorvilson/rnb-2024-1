import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Profile from './src/Profile';

/**https://api.github.com/users */
export default function App() {
  const[profiles, setProfiles] = useState([])
    
  async function loadProfile(){
      try{
        let response = await fetch('https://api.github.com/users')
        let dados = await response.json()
        setProfiles(dados)
      }
      catch(error){
        console.log(error.message)
      }
  }

  useEffect(()=>{loadProfile()},[])
  return (
    <View style={styles.container}>
      <Text>Github- Profiles</Text>  
      <Pressable
         onPress={loadProfile}
      >
        <Text>Listar</Text>
      </Pressable>
      <FlatList 
         data={profiles}
         renderItem={({item}) => <Profile login={item.login} avatar={item.avatar_url}/>}
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
