import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Label from './Label'

const Button = (props) => {
    const estilos = StyleSheet.create({
        TouchableOpacity: {
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
        <TouchableOpacity style={estilos.TouchableOpacity} onPress={props.Execute}>
            <Icon name={props.name} size={props.size} color={props.iconColor} />
            <Label value={props.value} color={props.color} fontSize={props.fontSize} textAlign={props.textAlign} />
        </TouchableOpacity>
    )
}

export default Button