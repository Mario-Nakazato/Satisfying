import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Button = (props) => {
    const estilos = StyleSheet.create({
        TouchableOpacity: {
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 512,
            height: props.Height,
            Text: {
                fontSize: props.fontSize,
                color: 'white',
                fontFamily: 'AveriaLibre-Regular',
            },
            backgroundColor: props.BackgroundColor,
        }
    })

    return (
        <>
            <TouchableOpacity style={estilos.TouchableOpacity} onPress={props.Execute}>
                <Text style={estilos.TouchableOpacity.Text}>{props.Text}</Text>
            </TouchableOpacity>
        </>
    )
}

export default Button