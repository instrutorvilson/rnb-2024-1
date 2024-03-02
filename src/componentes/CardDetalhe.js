import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
export default function CardDetalhe({ navigation, route }){
    const { login } = route.params
    const[profile, setProfile] = useState({})
    const[erro, setErro] = useState('')

    async function listarDetalhes(){
        try{
            let response = await fetch(`https://api.github.com/users/${login}`)
            let dados = await response.json()
            console.log(dados)
            setProfile(dados)            
          }
          catch(erro){
             setErro(erro.message)
          }
    }
    useEffect(()=>{listarDetalhes()},[])

    return(
        <View style={styles.container}>
            <Text style={styles.rotulo}>Usuário: 
                <Text style={styles.content}>{profile.login}</Text>
            </Text>
            <Image 
               style={styles.foto}
               source={{ uri: profile.avatar_url}}
            />
            <Text style={styles.rotulo}>Seguidores: 
                <Text style={styles.content}>{profile.followers}</Text>
            </Text>
            <Text style={styles.rotulo}>Seguindo: 
                <Text style={styles.content}>{profile.following}</Text>
            </Text>
            
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