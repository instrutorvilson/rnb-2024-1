import { useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import Toast from 'react-native-toast-message'

export default function Emissor({ navigation }) {
    const [texto, setTexto] = useState('')
    const refInput = useRef(null)

    function handleNavegar() {
        if (texto === '') {
            Toast.show({
                type: 'error',
                text1: 'Atenção!',
                text2: 'Precisa informar um texto'
            });
            refInput.current.focus()
            return
        }
        navigation.navigate('receptor', { msg: texto, nome: 'maria' })
    }
    return (
        <View style={styles.container}>
            <Text>Envie uma mensagem</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: olá maria'
                defaultValue={texto}
                onChangeText={txt => setTexto(txt)}
                ref={refInput}
            />

            <Pressable
                style={styles.btmenu}
                onPress={handleNavegar}
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
        margin: 5
    },
    btmenu: {
        marginVertical: 10,
        backgroundColor: 'lightblue',
        padding: 10
    },
    input: {
        padding: 10,
        marginVertical: 5
    }
});