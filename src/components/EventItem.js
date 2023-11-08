import { View, Image, StyleSheet } from 'react-native'
import Label from '../components/Label'

const EventItem = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{ uri: props.imagem }} />
            </View>
            <View style={styles.texto}>
                <Label value={props.nome.toUpperCase()} color='#4193c5' textAlign='center' fontSize={20} numberOfLines={1} />
                <Label value={props.data} color='#8B8B8B' textAlign='center' fontSize={12} numberOfLines={1} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 8,
        width: 144,
        height: 144,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 72,
    },
    texto: {
        marginTop: 16,
    }
})

export default EventItem