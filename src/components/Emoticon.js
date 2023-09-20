import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
        <View style={estilos.emoticon}>
            <Icon name={props.name} size={96} color={props.color} />
            <Text style={estilos.Text}>{props.Label}</Text>
        </View>
    )
}

export default Emoticon