import { View, Text, TextInput, StyleSheet } from 'react-native'

const BoxInput = (props) => {
    const estilos = StyleSheet.create({
        TextInput: {
            fontSize: 14,
            color: '#3F92C5',
            backgroundColor: 'white',
            paddingLeft: 16,
            minWidth: 512,
            maxHeight: 40,
            height: 36,
            fontFamily: 'AveriaLibre-Regular',
        },
        Text: {
            fontSize: 16,
            color: 'white',
            fontFamily: 'AveriaLibre-Regular',
            paddingVertical: 4,
            display: props.Display,
        },
    })
    return (
        <View>
            <Text style={estilos.Text}>{props.Text}</Text>
            <TextInput style={estilos.TextInput} value={props.value} onChangeText={props.onChangeText} keyboardType={props.keyboardType} />
        </View>
    )
}

export default BoxInput