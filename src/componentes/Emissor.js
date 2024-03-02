import { View, Text, Pressable, StyleSheet} from 'react-native'
export default function Emissor({navigation}){
    return(
        <View>
            <Text>Envie uma mensagem</Text>
            <Pressable
               style={styles.btmenu}
               onPress={() => navigation.navigate('receptor',{ msg: 'ola', nome: 'maria'})}
            >
                <Text>Enviar</Text>
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