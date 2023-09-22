import { Text, StyleSheet } from 'react-native'

const Label = (props) => {
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
            <Text numberOfLines={props.numberOfLines} style={estilos.Texto}>{props.value}</Text>
        </>
    )
}

export default Label