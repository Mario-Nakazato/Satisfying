import { View, Text, StyleSheet } from 'react-native'

const Txt = (props) => {
    const estilos = StyleSheet.create({
        Texto: {
            color: props.color,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: props.fontSize,
        },
    })
    return (
        <View>
            <Text style={estilos.Texto}>{props.value}</Text>
        </View>
    )
}

export default Txt