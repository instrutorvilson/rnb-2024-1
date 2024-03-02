import {View, Text, Image, StyleSheet, Pressable} from 'react-native'


export default function Card( props ){
    
    return(
        <View style={styles.container}>
            <Text style={styles.rotulo}>Usuário: 
                <Text style={styles.content}>{props.user.login}</Text>
            </Text>
            <Image 
               style={styles.foto}
               source={{ uri: props.user.avatar_url}}
            />
            <Pressable
              onPress={() => props.navigation.navigate('detalhes',{login:props.user.login})}
            >
                <Text>Ver detalhes</Text>
           </Pressable>               
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderWidth: '2px',
      padding: 5,
      borderRadius: 10
    },
    rotulo:{
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    content:{
        color: 'red',
        marginLeft: 8
    },
    foto:{
        width: 300, 
        height: 200,
        borderEndEndRadius: 20,
        borderTopStartRadius: 20
    }
  });