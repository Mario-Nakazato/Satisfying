import { View, Text, StyleSheet } from 'react-native'

const Erro = (props) => {
    const estilos = StyleSheet.create({
        Erro: {
            width: 512,
            color: '#FD7979',
            fontFamily: 'AveriaLibre-Regular',
            paddingVertical: 4,
        },
    })
    return (
        <View>
            <Text style={estilos.Erro}>{props.Erro}</Text>
        </ View>
    )
}

export default Erro