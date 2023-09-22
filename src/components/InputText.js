import { View, TextInput, StyleSheet } from 'react-native'

const InputText = (props) => {
    const estilos = StyleSheet.create({
        TextInput: {
            color: props.color, // '#3F92C5'
            backgroundColor: 'white',
            width: props.width,
            height: props.height,
            paddingLeft: 16,
            fontFamily: 'AveriaLibre-Regular',
            fontSize: props.fontSize,
        },
    })

    return (
        <View>
            <TextInput placeholder={props.placeholder} style={estilos.TextInput} value={props.value} color={props.color}
                placeholderTextColor={props.color} onChangeText={props.onChangeText} keyboardType={props.keyboardType} />
        </View>
    )
}

export default InputText