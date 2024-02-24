import { Image, Text, View } from 'react-native';
export default function Profile(props){
    return(
        <View>
            <Text>User: {props.login}</Text>
            <Image source={{uri: props.avatar}}
                 style={{width: 100, height: 100}} />

        </View>
    )
}