import { View, Text, StyleSheet } from 'react-native'
import ScreensSS from '../styles/ScreensSS'
import Emoticon from '../components/Emoticon'
import Button from '../components/Button'

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
    const Voltar = () => {
        props.navigation.push('SearchActions')
    }
    const Votar = () => {
        props.navigation.push('ThanksParticipation')
    }
    
    return (
        <View style={ScreensSS.conteiner}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <Button Execute={Voltar} BackgroundColor='#372775' Width={32} Height={32} />
            </View>
            <Text style={estilos.text}>O que você achou do Carnaval 2024 ?</Text>
            <View style={estilos.emoticon}>
                <Emoticon name='emoticon-angry-outline' color='#D71616' Label='Péssimo' Execute={Votar} />
                <Emoticon name='emoticon-sad-outline' color='#FF360A' Label='Ruim' Execute={Votar} />
                <Emoticon name='emoticon-neutral-outline' color='#FFC632' Label='Neutro' Execute={Votar} />
                <Emoticon name='emoticon-happy-outline' color='#37BD6D' Label='Bom' Execute={Votar} />
                <Emoticon name='emoticon-excited-outline' color='#25BC22' Label='Excelente' Execute={Votar} />
            </View>
        </View>
    )
}

export default Collect