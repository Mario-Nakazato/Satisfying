import { View, Text, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Emoticon from '../components/Emoticon'

const estilos = StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
    },
    emoticon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
})

const Collect = (props) => {
    return (
        <View style={ScreensSS.conteiner}>
            <Text style={estilos.text}>O que você achou do Carnaval 2024 ?</Text>
            <View style={estilos.emoticon}>
                <Emoticon name='sentiment-satisfied' color='#D71616' Label='Péssimo' />
                <Emoticon name='sentiment-satisfied' color='#FF360A' Label='Ruim' />
                <Emoticon name='sentiment-satisfied' color='#FFC632' Label='Neutro' />
                <Emoticon name='sentiment-satisfied' color='#37BD6D' Label='Bom' />
                <Emoticon name='sentiment-satisfied' color='#25BC22' Label='Excelente' />
            </View>
        </View>
    )
}

export default Collect