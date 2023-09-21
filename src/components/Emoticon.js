import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const estilos = StyleSheet.create({
    emoticon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
    },
})

const Emoticon = (props) => {
    return (
        <TouchableOpacity style={estilos.emoticon} onPress={props.Execute}>
            <Icon name={props.name} size={96} color={props.color} />
            <Text style={estilos.Text}>{props.Label}</Text>
        </TouchableOpacity>
    )
}

export default Emoticon