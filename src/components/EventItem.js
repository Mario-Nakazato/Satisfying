import { View, Text, Image, StyleSheet } from 'react-native'

const EventItem = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{ uri: props.imagem }} />
            </View>
            <View style={styles.texto}>
                <Text style={styles.title}>{props.nome.toUpperCase()}</Text>
                <Text style={styles.date}>{props.data}</Text>
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
    },
    title: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20,
        color: '#4193c5',
        textAlign: 'center',
    },
    date: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 12,
        textAlign: 'center',
    }
})

export default EventItem