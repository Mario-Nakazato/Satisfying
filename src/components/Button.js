import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

const Button = (props) => {
    const estilos = StyleSheet.create({
        emoticon: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            width: props.width,
            height: props.height,
        },
    })

    return (
        <TouchableOpacity style={estilos.emoticon} onPress={props.Execute}>
            <Icon name={props.name} size={props.size} color={props.iconColor} />
            <Txt value={props.value} color={props.color} fontSize={props.fontSize} />
        </TouchableOpacity>
    )
}

export default Button