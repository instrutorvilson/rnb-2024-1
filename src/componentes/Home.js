import {Text, View, Button, Pressable, StyleSheet} from 'react-native'
export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable
              style={styles.btmenu}
              onPress={() => navigation.navigate('cadastro')}
            >
                <Text>Cadastro</Text>
            </Pressable>

            <Pressable
              style={styles.btmenu}
              onPress={() => navigation.navigate('consulta')}
            >
                <Text>Consulta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btmenu:{
        marginVertical: 10,
        backgroundColor: 'lightblue',
        padding: 10
    }
  });