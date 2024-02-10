import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';
import Conceito from './Conceito';
import NomeSobrenome from './NomeSobrenome';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Conceito />
      <NomeSobrenome />
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
  }
});
