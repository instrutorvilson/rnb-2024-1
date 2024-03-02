import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/componentes/Home'
import CardDetalhe from './src/componentes/CardDetalhe';

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
              name='detalhes'
              component={CardDetalhe}
          />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


