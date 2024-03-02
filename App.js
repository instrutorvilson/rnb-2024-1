import { StyleSheet, Text, View } from 'react-native'
import Home from './src/componentes/Home'
import Cadastro from './src/componentes/Cadastro'
import Consulta from './src/componentes/Consulta'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Toast from 'react-native-toast-message'

import Emissor from './src/componentes/Emissor'
import Receptor from './src/componentes/Receptor'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen 
              name='home'
              component={Home}
           />

           <Stack.Screen 
              name='cadastro'
              component={Cadastro}
           />

          <Stack.Screen 
              name='consulta'
              component={Consulta}
           />

           <Stack.Screen 
              name='emissor'
              component={Emissor}
           />

          <Stack.Screen 
              name='receptor'
              component={Receptor}
           />
        </Stack.Navigator>
        <Toast />
    </NavigationContainer>
  );
}


