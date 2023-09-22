import { View, Text, StyleSheet } from 'react-native'

const Txt = (props) => {
    const estilos = StyleSheet.create({
        Texto: {
            color: props.color,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: props.fontSize,
            textAlign: props.textAlign
        },
    })
    return (
        <>
            <Text style={estilos.Texto}>{props.value}</Text>
        </>
    )
}

export default Txt