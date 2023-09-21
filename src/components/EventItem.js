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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 0,
        width: 180,
        height: 180,
    },
    image: {
        width: 100,
        height: 100
    },
    texto: {
        marginTop: 15,
    },
    title: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25,
        color: '#4193c5',
        textAlign: 'center',
    },
    date: {
        fontSize: 10,
        textAlign: 'center',
    }
})

export default EventItem