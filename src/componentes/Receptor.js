import {View, Text} from 'react-native'
export default function Receptor({navigation, route}){
    const { msg, nome } = route.params
    return(
        <View>
            <Text>{msg}</Text>
            <Text>{nome}</Text>
        </View>
    )
}