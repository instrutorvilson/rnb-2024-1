import { StyleSheet, Text, View } from 'react-native';

export default function Fruta( props ) {
    return (
      <View style={styles.container}>
        <Text> Nome: <Text style={{color:'red'}}> { props.dados.nome }</Text> </Text>  
        <Text> Tipo: <Text style={{color:'red'}}> { props.dados.tipo }</Text> </Text>           
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item:{
        fontSize: 16,
        borderWidth:1,
        marginVertical: 5,
        paddingHorizontal: 5
    },
    container: {
      display:'flex',
      flexDirection:'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      borderWidth: 1,
      marginVertical: 2
    },
  });