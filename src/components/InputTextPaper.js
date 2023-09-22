import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const InputTextPaper = (props) => {
    const estilos = StyleSheet.create({
        TextInput: {
            backgroundColor: props.backgroundColor,
            width: props.width,
            height: props.height,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
    })

    return (
        <>
            <TextInput style={estilos.TextInput} placeholder={props.placeholder} value={props.value} left={props.left}
                right={props.right} textColor={props.textColor} placeholderTextColor={props.placeholderTextColor}
                contentStyle={props.contentStyle} onChangeText={props.onChangeText} />
        </>
    )
}

export default InputTextPaper