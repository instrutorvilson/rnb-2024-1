import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Conceito from './Conceito';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Conceito />
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
